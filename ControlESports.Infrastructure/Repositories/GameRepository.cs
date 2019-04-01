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
  public class GameRepository : GenericRepository<Game>, IGameRepository
  {
    public GameRepository(ControlESportsEntities dataContext) : base(dataContext)
    {

    }
  }
}
