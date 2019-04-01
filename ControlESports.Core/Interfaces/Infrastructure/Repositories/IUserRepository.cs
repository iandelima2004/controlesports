using ControlESports.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.Interfaces.Infrastructure.Repositories
{
  public interface IUserRepository : IRepository<User>
  {
    User GetActiveUserByUserName(string userName);
    bool CheckUserNameAlreadyExist(string userName);
  }
}
