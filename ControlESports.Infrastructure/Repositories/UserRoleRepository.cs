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
  public class UserRoleRepository : GenericRepository<UserRole>, IUserRoleRepository
  {
    public UserRoleRepository(ControlESportsEntities dataContext) : base(dataContext)
    {

    }

    public List<UserRole> GetAllRoleByUserId(Guid userId)
    {
      return this.Context.UserRoles.Where(a => a.UserId == userId).ToList();
    }
  }
}
