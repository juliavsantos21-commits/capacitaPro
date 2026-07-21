namespace CapacitaPro.API;

public class CadastroDto
{
    public string Nome { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Senha { get; set; } = string.Empty;
    public string? Instituicao { get; set; }
    public string? AnoConclusao { get; set; }
    public string? GradeCurricular { get; set; }
}