﻿using Microsoft.EntityFrameworkCore;
using PersonForm.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonForm.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {
        }
        public DbSet<Person> People { get; set; }
    }
}
