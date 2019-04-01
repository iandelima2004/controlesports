namespace ControlESports.Infrastructure.DbContext
{
  using System;
  using System.Data.Entity;
  using System.ComponentModel.DataAnnotations.Schema;
  using System.Linq;
  using Core.Entities;

  public partial class ControlESportsEntities : DbContext
  {
    public ControlESportsEntities()
        : base("name=ControlESportsEntities")
    {
    }

    public virtual DbSet<Blog> Blogs { get; set; }
    public virtual DbSet<BlogComment> BlogComments { get; set; }
    public virtual DbSet<Country> Countries { get; set; }
    public virtual DbSet<Game> Games { get; set; }
    public virtual DbSet<Image> Images { get; set; }
    public virtual DbSet<Role> Roles { get; set; }
    public virtual DbSet<Team> Teams { get; set; }
    public virtual DbSet<TeamMember> TeamMembers { get; set; }
    public virtual DbSet<TeamRole> TeamRoles { get; set; }
    public virtual DbSet<User> Users { get; set; }
    public virtual DbSet<UserRole> UserRoles { get; set; }
    public virtual DbSet<TeamAchievement> TeamAchievements { get; set; }

    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
      modelBuilder.Entity<Blog>()
          .HasMany(e => e.BlogComments)
          .WithRequired(e => e.Blog)
          .WillCascadeOnDelete(false);

      modelBuilder.Entity<Country>()
          .HasMany(e => e.Users)
          .WithRequired(e => e.Country)
          .WillCascadeOnDelete(false);

      modelBuilder.Entity<Game>()
          .HasMany(e => e.Blogs)
          .WithRequired(e => e.Game)
          .WillCascadeOnDelete(false);

      modelBuilder.Entity<Game>()
          .HasMany(e => e.Teams)
          .WithRequired(e => e.Game)
          .WillCascadeOnDelete(false);

      modelBuilder.Entity<Image>()
          .HasMany(e => e.Blogs)
          .WithOptional(e => e.Image)
          .HasForeignKey(e => e.HeaderImage);

      modelBuilder.Entity<Image>()
          .HasMany(e => e.Blogs1)
          .WithOptional(e => e.Image1)
          .HasForeignKey(e => e.FooterImage);

      modelBuilder.Entity<Image>()
          .HasMany(e => e.Teams)
          .WithOptional(e => e.Image)
          .HasForeignKey(e => e.TeamLogoId);

      modelBuilder.Entity<Image>()
          .HasMany(e => e.Users)
          .WithOptional(e => e.Image)
          .HasForeignKey(e => e.ProfileImage);

      modelBuilder.Entity<Role>()
          .HasMany(e => e.UserRoles)
          .WithRequired(e => e.Role)
          .WillCascadeOnDelete(false);

      modelBuilder.Entity<Team>()
          .HasMany(e => e.TeamAchievements)
          .WithRequired(e => e.Team)
          .WillCascadeOnDelete(false);

      modelBuilder.Entity<Team>()
          .HasMany(e => e.TeamMembers)
          .WithRequired(e => e.Team)
          .WillCascadeOnDelete(false);

      modelBuilder.Entity<User>()
          .HasMany(e => e.TeamMembers)
          .WithRequired(e => e.User)
          .WillCascadeOnDelete(false);

      modelBuilder.Entity<User>()
          .HasMany(e => e.UserRoles)
          .WithRequired(e => e.User)
          .WillCascadeOnDelete(false);
    }
  }
}
