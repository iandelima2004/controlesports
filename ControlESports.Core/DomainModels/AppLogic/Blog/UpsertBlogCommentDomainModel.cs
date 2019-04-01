using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.DomainModels.AppLogic.Blog
{
  public class UpsertBlogCommentDomainModel
  {
    public Guid BlogId { get; set; }
    public string Comment { get; set; }
    public DateTime CreatedDate { get; set; }
    public Guid CreatedById { get; set; }
  }
}
