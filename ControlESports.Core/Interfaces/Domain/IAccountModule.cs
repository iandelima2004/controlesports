using ControlESports.Core.DomainModels.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.Interfaces.Domain
{
  public interface IAccountModule
  {
    bool IsValidLoginCredentials(string userName, string password);
    void CreateNewAccount(CreateAccountDomainModel payload);
    void ChangePassword(Guid userId, string password);
  }
}
