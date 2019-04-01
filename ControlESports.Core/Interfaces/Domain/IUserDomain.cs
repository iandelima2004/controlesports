using ControlESports.Core.DomainModels.AppLogic.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.Interfaces.Domain
{
  public interface IUserDomain
  {
    void UpdateUserInfo(UserInfoDomainModel payload);
  }
}
