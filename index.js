const Aluno = require('./classes/Aluno');
const Turma = require('./classes/Turma');
const TurmaPresencial = require('./classes/TurmaPresencial');

// Criação Aluno
const aluno1 = new Aluno('Felipe Martins', 'femartins', '2475286');
console.log('Aluno:', aluno1);

// Criação turma e aprovação
const turma1 = new Turma('MAT001', 7);
console.log('Turma MAT001 - Aprovado?', turma1.aprovado());

// Criação turma presencial e aprovação
const turmaPresencial1 = new TurmaPresencial('ABC002', 8, 80);
console.log('Turma Presencial ABC002 - Aprovado?', turmaPresencial1.aprovado());

// Criação turma presencial e frequência baixa
const turmaPresencial2 = new TurmaPresencial('FFF003', 8, 70);
console.log('Turma Presencial FFF003 - Aprovado com baixa frequência?', turmaPresencial2.aprovado());