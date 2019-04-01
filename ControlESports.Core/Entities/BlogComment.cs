namespace ControlESports.Core.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("BlogComment")]
    public partial class BlogComment
    {
        public int Id { get; set; }

        public Guid BlogId { get; set; }

        [Required]
        [StringLength(2000)]
        public string Comment { get; set; }

        public DateTime CreatedDate { get; set; }

        [Required]
        [StringLength(50)]
        public string CreatedByUsername { get; set; }

        public virtual Blog Blog { get; set; }
    }
}
