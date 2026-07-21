var builder = WebApplication.CreateBuilder(args);

// Adiciona suporte aos Controllers da API
builder.Services.AddControllers();

// Libera requisições do Front-End (CORS)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseCors("AllowAll");
app.UseAuthorization();
app.MapControllers();

app.Run();