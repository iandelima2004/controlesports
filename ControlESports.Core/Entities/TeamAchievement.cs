namespace ControlESports.Core.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("TeamAchievement")]
    public partial class TeamAchievement
    {
        [Key]
        [Column(Order = 0)]
        public Guid Id { get; set; }

        [Key]
        [Column(Order = 1)]
        public Guid TeamId { get; set; }

        [Key]
        [Column(Order = 2)]
        [StringLength(1000)]
        public string Title { get; set; }

        [Key]
        [Column(Order = 3)]
        public DateTime CreatedDate { get; set; }

        [Key]
        [Column(Order = 4)]
        public Guid CreatedById { get; set; }

        [Key]
        [Column(Order = 5)]
        public bool IsActvie { get; set; }

        public virtual Team Team { get; set; }
    }
}
