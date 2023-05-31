import GetFormatDate from '@/components/Utilities/getFormateDate';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { CardTextContainer } from './cardTextContainer';
import { Grid } from './grid';
import { PostType } from '@/types/posts';
const LinksGrid = ({
  className,
  gridItems,
  id,
  linkPrefix,
  onlyImage = false,
}: {
  className?: string;
  gridItems: Array<PostType>;
  id: string;
  linkPrefix: string;
  onlyImage: boolean;
}) => {
  return (
    <Grid id={id} className={className}>
      {gridItems.map((post, index) => (
        <Link href={`/${linkPrefix}/${post.path}`} key={index}>
          <CardStyles>
            <CardImage>
              <Image
                src={'/multimedia/' + post.imagen}
                layout="fill"
                alt={post.title}
              />
            </CardImage>
            {onlyImage === false && (
              <CardTextContainer>
                <span className="date">{GetFormatDate(post.date)}</span>
                <h4 className="title">{post.title}</h4>
              </CardTextContainer>
            )}
          </CardStyles>
        </Link>
      ))}
    </Grid>
  );
};

const CardStyles = styled.div`
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
`;

const CardImage = styled.div`
  aspect-ratio: 1/1;
  position: relative;
  width: 100%;
`;

export { LinksGrid };
