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
  public class TeamMemberRepository : GenericRepository<TeamMember>, ITeamMemberRepository
  {
    public TeamMemberRepository(ControlESportsEntities dataContext) : base(dataContext)
    {

    }

    public TeamMember GetCurrentTeamMemberByTeamAndUserId(Guid teamId, Guid userId)
    {
      return this.Context.TeamMembers.FirstOrDefault(a => a.TeamId == teamId && a.UserId == userId);
    }
  }
}
