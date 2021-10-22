import { ReactNode } from 'react';

import { Container } from './styles';

interface SectionTitleProps {
  title : string | ReactNode;
  description?: string | ReactNode; /* descrição e opcional n obrigatorio =?: */
}

function SectionTitle({ title,description  }: SectionTitleProps) {
  return (
    <Container data-aos="fade-right">{/* animação com aos importado no index principal */}
      <h1>#{title}</h1>
        {description && <h2>{description}</h2>} {/* cond p/ verif se existe descrição, se existir ele cria */}

    </Container>
  );
};

export default SectionTitle;
