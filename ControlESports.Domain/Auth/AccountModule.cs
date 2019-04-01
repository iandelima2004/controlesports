using ControlESports.Core.DomainModels.Auth;
using ControlESports.Core.Entities;
using ControlESports.Core.Interfaces.Domain;
using ControlESports.Core.Interfaces.Helpers;
using ControlESports.Core.Interfaces.Infrastructure.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;

namespace ControlESports.Domain.Auth
{
  public class AccountModule : IAccountModule
  {
    private readonly IUserRepository _userRepository;
    private readonly ICryptographyHelper _cryptographyHelper;

    public AccountModule(ICryptographyHelper cryptographyHelper, IUserRepository userRepository)
    {
      _userRepository = userRepository;
      _cryptographyHelper = cryptographyHelper;
    }

    public bool IsValidLoginCredentials(string userName, string password)
    {
      var currentUser = _userRepository.GetActiveUserByUserName(userName);

      if (currentUser != null)
      {
        return _cryptographyHelper.IsValidPassword(password, currentUser.Password, currentUser.PasswordInitVector);
      }
      return false;
    }

    public void CreateNewAccount(CreateAccountDomainModel payload)
    {
      if (_userRepository.CheckUserNameAlreadyExist(payload.UserName))
      {
        var vector = _cryptographyHelper.GenerateInitVector();

        var mappedUser = AutoMapper.Mapper.Map<User>(payload);

        mappedUser.Password = _cryptographyHelper.EncodePassword(payload.Password, vector);
        mappedUser.PasswordInitVector = vector;
        mappedUser.CreatedDate = DateTime.Now;
        mappedUser.Id = Guid.NewGuid();

        var newUser = _userRepository.Insert(mappedUser);

        _userRepository.Save();
      }
    }

    public void ChangePassword(Guid userId, string password)
    {
      var currentUser = _userRepository.GetById(userId);

      if (currentUser != null)
      {
        var vector = _cryptographyHelper.GenerateInitVector();
        currentUser.Password = _cryptographyHelper.EncodePassword(password, vector);
        currentUser.PasswordInitVector = vector;
        _userRepository.Save();
      }
    }
  }
}
