import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { sendContactMail } from '../../services/sendMail';
import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';

export default function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault(); //previne que a pag seja recarregada quando enviar o form
    if(loading) return;

    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      toast('Por favor preencha todos os campos para enviar sua mensagem!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }
    try {
      setLoading(true);
      await sendContactMail(nome, email, mensagem);
      setNome('');//limpar os campos após o envio
      setEmail('');
      setMensagem('');
      toast('Mensagem enviada com sucesso!',{
        style: {
            background: theme.secondary,
            color: '#fff'
          }
      });
    } catch (err) {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
    }finally {//executa mesmo dando certo ou errado
      setLoading(false)
    }
  }

  //handleSubmit function que ira ser executado ao apertar o btn enviara
  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      {/* animação fade-up */}
      <Input
        placeholder="Nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <Input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextArea
        placeholder="Mensagem"
        value={mensagem}
        onChange={({ target }) => setMensagem(target.value)}
      />
      <button type="submit" disabled={loading}>Enviar</button>
    </FormContainer>
  );
}
