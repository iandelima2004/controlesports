namespace ControlESports.Core.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("TeamMember")]
    public partial class TeamMember
    {
        public int Id { get; set; }

        public Guid TeamId { get; set; }

        public Guid UserId { get; set; }

        [Required]
        [StringLength(50)]
        public string TeamRole { get; set; }

        public bool IsActive { get; set; }

        public DateTime CreatedDate { get; set; }

        public Guid CreatedById { get; set; }

        public DateTime ModifiedDate { get; set; }

        public virtual Team Team { get; set; }

        public virtual User User { get; set; }
    }
}
