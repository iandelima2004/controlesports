using ControlESports.Core.DomainModels.AppLogic.Blog;
using ControlESports.Core.Entities;
using ControlESports.Core.Interfaces.Domain;
using ControlESports.Core.Interfaces.Infrastructure.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;

namespace ControlESports.Domain.AppLogic
{
  public class BlogDomain : IBlogDomain
  {
    private readonly IBlogRepository _blogRepository;
    private readonly IBlogCommentRepository _blogCommentRepository;
    private readonly IImageRepository _imageRepository;

    public BlogDomain(IBlogRepository blogRepository, IBlogCommentRepository blogCommentRepository, IImageRepository imageRepository)
    {
      _blogRepository = blogRepository;
      _blogCommentRepository = blogCommentRepository;
      _imageRepository = imageRepository;
    }

    public List<BlogInfoDomainModel> GetHighLevelBlogDetailByUserId(Guid userId)
    {
      var currentBlogs = _blogRepository.GetAllBlogCreatedByUserId(userId);
      return AutoMapper.Mapper.Map<List<BlogInfoDomainModel>>(currentBlogs);
    }

    public BlogDetailDomainModel GetBlogDetailById(Guid id)
    {
      return AutoMapper.Mapper.Map<BlogDetailDomainModel>(_blogRepository.GetById(id));
    }

    public Guid CreateNewBlogItem(UpsertBlogDomainModel payload)
    {
      var newBlog = AutoMapper.Mapper.Map<Blog>(payload);

      using (var scope = new TransactionScope())
      {
        if (payload.HeaderImage != null)
        {
          var newImage = new Core.Entities.Image()
          {
            Guid = Guid.NewGuid(),
            ImageData = payload.HeaderImage,
            CreatedDate = new DateTime()

          };
          _imageRepository.Insert(newImage);
          _imageRepository.Save();
          newBlog.HeaderImage = newImage.Guid;
        }

        if (payload.FooterImage != null)
        {
          var newImage = new Core.Entities.Image()
          {
            Guid = Guid.NewGuid(),
            ImageData = payload.FooterImage,
            CreatedDate = new DateTime()

          };
          _imageRepository.Insert(newImage);
          _imageRepository.Save();
          newBlog.FooterImage = newImage.Guid;
        }

        _blogRepository.Insert(newBlog);
        _blogRepository.Save();

        scope.Complete();
      }
      return newBlog.Id;
    }

    public void UpdateBlog(UpsertBlogDomainModel payload)
    {
      var currentBlog = _blogRepository.GetById(payload.Id);

      if (currentBlog != null)
      {
        currentBlog.Title = payload.Title;
        currentBlog.Post = payload.Post;
        currentBlog.ModifiedDate = DateTime.Now;
        currentBlog.GameId = payload.GameId;
      }

      using (var scope = new TransactionScope())
      {
        if (payload.HeaderImage != null)
        {
          if (currentBlog.HeaderImage != null)
          {
            _imageRepository.DeleteImageById(currentBlog.HeaderImage.GetValueOrDefault());
          }

          var newImage = new Core.Entities.Image()
          {
            Guid = Guid.NewGuid(),
            ImageData = payload.HeaderImage,
            CreatedDate = new DateTime()

          };
          _imageRepository.Insert(newImage);
          _imageRepository.Save();
          currentBlog.HeaderImage = newImage.Guid;
        }

        if (payload.FooterImage != null)
        {
          var footerImage = Guid.NewGuid();

          var newImage = new Core.Entities.Image()
          {
            Guid = Guid.NewGuid(),
            ImageData = payload.FooterImage,
            CreatedDate = new DateTime()

          };
          _imageRepository.Insert(newImage);
          _imageRepository.Save();
          currentBlog.FooterImage = newImage.Guid;
        }
        _blogRepository.Save();

        scope.Complete();
      }
    }

    public int CreateNewComment(UpsertBlogCommentDomainModel payload)
    {
      var newComment = AutoMapper.Mapper.Map<BlogComment>(payload);
      _blogCommentRepository.Insert(newComment);
      _blogCommentRepository.Save();
      return newComment.Id;
    }
  }
}
