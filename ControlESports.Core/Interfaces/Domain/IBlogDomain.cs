using ControlESports.Core.DomainModels.AppLogic.Blog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.Interfaces.Domain
{
  public interface IBlogDomain
  {
    List<BlogInfoDomainModel> GetHighLevelBlogDetailByUserId(Guid userId);
    BlogDetailDomainModel GetBlogDetailById(Guid id);
    Guid CreateNewBlogItem(UpsertBlogDomainModel payload);
    void UpdateBlog(UpsertBlogDomainModel payload);
    int CreateNewComment(UpsertBlogCommentDomainModel payload);
  }
}
