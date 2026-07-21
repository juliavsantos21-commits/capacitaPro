namespace CapacitaPro.API;

public class Usuario
{
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string SenhaHash { get; set; } = string.Empty;
    public string? Instituicao { get; set; }
    public string? AnoConclusao { get; set; }
    public string? GradeCurricular { get; set; }
    public string? HistoricoEscolarUrl { get; set; }
    public DateTime DataCriacao { get; set; } = DateTime.UtcNow;
}