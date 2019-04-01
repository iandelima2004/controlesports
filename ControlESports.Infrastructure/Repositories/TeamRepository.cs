using ControlESports.Core.Entities;
using ControlESports.Core.Interfaces.Infrastructure.Repositories;
using ControlESports.Infrastructure.DbContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Linq.Expressions;

namespace ControlESports.Infrastructure.Repositories
{
  public class TeamRepository : GenericRepository<Team>, ITeamRepository
  {
    public TeamRepository(ControlESportsEntities dataContext) : base(dataContext)
    {

    }

    public List<Team> GetTeamByExpressionBuilder(int page, int take, Expression<Func<Team, bool>> expression)
    {
      return Context.Teams.Include(a => a.TeamMembers).Include(a => a.Game).Where(expression).OrderBy(a => a.Name).Skip(page * take).Take(take).ToList();
    }

    public List<Team> GetAllTeamWithPaging(int page, int take)
    {
      return Context.Teams.Include(a => a.TeamMembers).Include(a => a.Game).OrderBy(a => a.Name).Skip(page * take).Take(take).ToList();
    }
  }
}
