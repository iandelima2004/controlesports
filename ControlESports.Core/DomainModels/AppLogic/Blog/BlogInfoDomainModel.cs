﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.DomainModels.AppLogic.Blog
{
  public class BlogInfoDomainModel
  {
    public Guid Id { get; set; }
    public string Title { get; set; }
    public DateTime CreatedDateTime { get; set; }
    public int CommentCount { get; set; }
  }
}
