using ControlESports.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.Interfaces.Infrastructure.Repositories
{
  public interface ITeamRepository : IRepository<Team>
  {
    List<Team> GetTeamByExpressionBuilder(int page, int take, Expression<Func<Team, bool>> expression);
    List<Team> GetAllTeamWithPaging(int page, int take);
  }
}
