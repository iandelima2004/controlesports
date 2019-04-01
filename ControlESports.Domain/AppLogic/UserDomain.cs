using ControlESports.Core.DomainModels.AppLogic.User;
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
  public class UserDomain : IUserDomain
  {
    private readonly IUserRepository _userRepository;
    private readonly IImageRepository _imageRepository;
    private readonly IUserRoleRepository _userRoleRepository;
    public UserDomain(IUserRepository userRepository, IImageRepository imageRepository, IUserRoleRepository userRoleRepository)
    {
      _userRepository = userRepository;
      _imageRepository = imageRepository;
      _userRoleRepository = userRoleRepository;
    }

    public void UpdateUserInfo(UserInfoDomainModel payload)
    {
      var currentUser = _userRepository.GetById(payload.Id);

      if (currentUser != null)
      {
        using (var scope = new TransactionScope())
        {
          currentUser.FirstName = payload.FirstName;
          currentUser.LastName = payload.LastName;
          currentUser.EmailAddress = payload.EmailAddress;
          currentUser.DisplayName = payload.DisplayName;
          currentUser.CountryId = payload.CountryId;
          currentUser.ModifiedDate = DateTime.Now;

          if (payload.ImageData != null)
          {
            if (currentUser.ProfileImage != null)
            {
              _imageRepository.DeleteImageById(currentUser.ProfileImage.GetValueOrDefault());
            }

            var newImage = new Core.Entities.Image()
            {
              Guid = Guid.NewGuid(),
              ImageData = payload.ImageData,
              CreatedDate = new DateTime()

            };

            _imageRepository.Insert(newImage);
            _imageRepository.Save();
            currentUser.ProfileImage = newImage.Guid;
          }

          if (payload.Roles.Any())
          {
            var currentRoles = _userRoleRepository.GetAllRoleByUserId(currentUser.Id);

            currentRoles.ForEach(a => _userRoleRepository.Delete(a));
            _userRoleRepository.Save();

            payload.Roles.ForEach(a => _userRoleRepository.Insert(new Core.Entities.UserRole() { RoleId = a, UserId = currentUser.Id }));
            _userRoleRepository.Save();
          }

          _userRepository.Save();
          scope.Complete();
        }
      }
    }
  }
}
