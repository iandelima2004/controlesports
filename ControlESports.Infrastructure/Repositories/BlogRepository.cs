using ControlESports.Core.Entities;
using ControlESports.Core.Interfaces.Infrastructure.Repositories;
using ControlESports.Infrastructure.DbContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace ControlESports.Infrastructure.Repositories
{
  public class BlogRepository : GenericRepository<Blog>, IBlogRepository
  {
    public BlogRepository(ControlESportsEntities dataContext) : base(dataContext)
    {

    }

    public List<Blog> GetAllBlogCreatedByUserId(Guid userId)
    {
      return this.Context.Blogs.Include(a => a.BlogComments).Where(a => a.CreatedById == userId).ToList();
    }
  }
}
