using ControlESports.Core.DomainModels.AppLogic.Team;
using ControlESports.Core.Entities;
using ControlESports.Core.Interfaces.Domain;
using ControlESports.Core.Interfaces.Infrastructure.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;

namespace ControlESports.Domain.AppLogic
{
  public class TeamDomain : ITeamDomain
  {
    private readonly ITeamRepository _teamRepository;
    private readonly ITeamRoleRepository _teamRoleRepository;
    private readonly ITeamMemberRepository _teamMemberRepository;
    private readonly ITeamAchievementRepository _teamAchievementRepository;
    private readonly IImageRepository _imageRepository;
    public TeamDomain(ITeamRepository teamRepository, ITeamRoleRepository teamRoleRepository, ITeamMemberRepository teamMemberRepository, ITeamAchievementRepository teamAchievementRepository, IImageRepository imageRepository)
    {
      _teamRepository = teamRepository;
      _teamRoleRepository = teamRoleRepository;
      _teamMemberRepository = teamMemberRepository;
      _teamAchievementRepository = teamAchievementRepository;
      _imageRepository = imageRepository;
    }

    public List<TeamSummaryDomainModel> GetAllActiveTeam(int page, int pageSize)
    {
      var teamList = _teamRepository.GetTeamByExpressionBuilder(page, pageSize, a => a.IsActive);
      return AutoMapper.Mapper.Map<List<TeamSummaryDomainModel>>(teamList);
    }

    public List<TeamSummaryDomainModel> GetAllTeams(int page, int pageSize)
    {
      var teamList = _teamRepository.GetAllTeamWithPaging(page, pageSize);
      return AutoMapper.Mapper.Map<List<TeamSummaryDomainModel>>(teamList);
    }


    public Guid CreateNewTeam(TeamDomainModel payload)
    {
      var newTeam = AutoMapper.Mapper.Map<Team>(payload);
      var teamImage = Guid.NewGuid();
      using (var scope = new TransactionScope())
      {
        if (payload.ImageData != null)
        {
          var newImage = new Core.Entities.Image()
          {
            Guid = Guid.NewGuid(),
            ImageData = payload.ImageData,
            CreatedDate = new DateTime()

          };
          _imageRepository.Insert(newImage);
          _imageRepository.Save();
          newTeam.TeamLogoId = teamImage;
        }

        _teamRepository.Insert(newTeam);
        _teamRepository.Save();

        scope.Complete();
      }
      return newTeam.Id;
    }

    public void UpdateTeam(TeamDomainModel payload)
    {
      var currentTeam = _teamRepository.GetById(payload.Id);

      if (currentTeam != null)
      {
        using (var scope = new TransactionScope())
        {
          currentTeam.Name = payload.Name;
          currentTeam.IsActive = payload.IsActive;
          currentTeam.GameId = payload.GameId;
          if (payload.ImageData != null)
          {
            if (currentTeam.TeamLogoId != null)
            {
              _imageRepository.DeleteImageById(currentTeam.TeamLogoId.GetValueOrDefault());
            }

            var newImage = new Core.Entities.Image()
            {
              Guid = Guid.NewGuid(),
              ImageData = payload.ImageData,
              CreatedDate = new DateTime()

            };

            _imageRepository.Insert(newImage);
            _imageRepository.Save();
            currentTeam.TeamLogoId = newImage.Guid;
          }

          _teamRepository.Save();
          scope.Complete();
        }
      }
    }

    public void DisableTeam(Guid teamId)
    {
      var currentTeam = _teamRepository.GetById(teamId);

      if (currentTeam != null)
      {
        currentTeam.IsActive = false;
        _teamRepository.Save();
      }
    }



    public int AddNewTeamMember(TeamMemberDomainModel payload)
    {
      var newTeamMember = AutoMapper.Mapper.Map<TeamMember>(payload);

      newTeamMember.IsActive = true;

      _teamMemberRepository.Insert(newTeamMember);
      _teamMemberRepository.Save();
      return newTeamMember.Id;
    }

    public void RemoveTeamMember(Guid teamId, Guid userId)
    {
      var currentRecord = _teamMemberRepository.GetCurrentTeamMemberByTeamAndUserId(teamId, userId);

      if (currentRecord != null)
      {
        _teamMemberRepository.Delete(currentRecord);
        _teamMemberRepository.Save();
      }
    }

    public void InactivateTeamMember(Guid teamId, Guid userId)
    {
      var currentRecord = _teamMemberRepository.GetCurrentTeamMemberByTeamAndUserId(teamId, userId);

      if (currentRecord != null)
      {
        currentRecord.IsActive = false;
        _teamMemberRepository.Save();
      }
    }
  }
}
