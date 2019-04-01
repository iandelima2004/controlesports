using ControlESports.Core.Entities;
using ControlESports.Core.Interfaces.Infrastructure.Repositories;
using ControlESports.Infrastructure.DbContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Infrastructure.Repositories
{
  public class UserRepository : GenericRepository<User>, IUserRepository
  {
    public UserRepository(ControlESportsEntities dataContext) : base(dataContext)
    {

    }

    public User GetActiveUserByUserName(string userName)
    {
      return Context.Users.FirstOrDefault(a => a.UserName == userName && a.IsActive == true);
    }

    public bool CheckUserNameAlreadyExist(string userName)
    {
      return Context.Users.Any(a => a.UserName.ToLower().Trim() == userName.ToLower().Trim());
    }
  }
}
