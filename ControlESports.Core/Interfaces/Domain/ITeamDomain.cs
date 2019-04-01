using ControlESports.Core.DomainModels.AppLogic.Team;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.Interfaces.Domain
{
  public interface ITeamDomain
  {
    Guid CreateNewTeam(TeamDomainModel payload);
    void UpdateTeam(TeamDomainModel payload);
    void DisableTeam(Guid teamId);
    int AddNewTeamMember(TeamMemberDomainModel payload);

    void RemoveTeamMember(Guid teamId, Guid userId);
    void InactivateTeamMember(Guid teamId, Guid userId);
  }
}
