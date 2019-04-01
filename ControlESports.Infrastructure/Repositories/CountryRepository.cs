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
  public class CountryRepository : GenericRepository<Country>, ICountryRepository
  {
    public CountryRepository(ControlESportsEntities dataContext) : base(dataContext)
    {

    }
  }
}
