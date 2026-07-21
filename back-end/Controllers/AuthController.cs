using Microsoft.AspNetCore.Mvc;

namespace CapacitaPro.API;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private static readonly List<Usuario> Usuarios = new();

    [HttpPost("cadastro")]
    public IActionResult Cadastrar([FromBody] CadastroDto dto)
    {
        if (Usuarios.Any(u => u.Email == dto.Email))
            return BadRequest(new { mensagem = "E-mail já cadastrado!" });

        var usuario = new Usuario
        {
            Id = Usuarios.Count + 1,
            Nome = dto.Nome,
            Email = dto.Email,
            SenhaHash = dto.Senha,
            Instituicao = dto.Instituicao,
            AnoConclusao = dto.AnoConclusao,
            GradeCurricular = dto.GradeCurricular
        };

        Usuarios.Add(usuario);

        return Ok(new { mensagem = "Usuário cadastrado com sucesso!" });
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginDto dto)
    {
        var usuario = Usuarios.FirstOrDefault(u => u.Email == dto.Email);

        if (usuario == null || usuario.SenhaHash != dto.Senha)
            return Unauthorized(new { mensagem = "E-mail ou senha incorretos." });

        return Ok(new { mensagem = "Login efetuado com sucesso!", usuarioId = usuario.Id, nome = usuario.Nome });
    }
}