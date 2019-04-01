using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.DomainModels.AppLogic.Blog
{
  public class UpsertBlogDomainModel
  {
    public Guid Id { get; set; }
    public int GameId { get; set; }
    public string Title { get; set; }

    public string Description { get; set; }
    public string Post { get; set; }

    public byte[] HeaderImage { get; set; }

    public byte[] FooterImage { get; set; }

    public Guid CreatedById { get; set; }
  }
}
