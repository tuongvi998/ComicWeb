using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using ComicAPI.Services.UserService;
using ComicAPI.Services.ComicServices;
using Microsoft.IdentityModel.Tokens;
using ComicAPI.Controllers;
using ComicAPI.Services;

namespace ComicAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

        }
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(c =>  
                {  
                    c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());  
                });  
            
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddAuthentication(Options=>{
                Options.DefaultAuthenticateScheme="JwtBearer";
                Options.DefaultChallengeScheme="JwtBearer";
           }).AddJwtBearer("JwtBearer",jwtOptions=>{
                jwtOptions.TokenValidationParameters= new TokenValidationParameters()
                {
                    IssuerSigningKey= TokenController.SIGNING_KEY,
                    ValidateIssuer=false,
                    ValidateAudience=false,
                    ValidateIssuerSigningKey=true,
                    ValidateLifetime=true,
                    ClockSkew=TimeSpan.FromMinutes(5)
                };
            });
            services.AddDbContext<DataContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("ComicDatabase")));
           services.AddScoped<IUserService, UserService>();
           services.AddScoped<IComicService,comicService>();
           services.AddScoped<IChapService,ChapService>();
           services.AddScoped<IGenreService,GenreService>();
           services.AddScoped<ICommentService,CommentService>();
           services.AddScoped<ILikeService,LikeService>();
           services.AddScoped<IPostService,PostService>();
            services.AddScoped<ILikePostService,LikePostService>();
            services.AddScoped<IAnswerService,AnswerService>();
         }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            // add port to use react
            app.UseCors(options => options.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());   
           // app.UseCors(MyAllowSpecificOrigins); 
            app.UseAuthentication();
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
