import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Paragraph, Text, Link } from '@theme-ui/components';
import Image from 'next/image';
import { Project } from '@/../lib/api';
import { H4 } from './Typography';
import { LogoNaked } from './Logo';
import Modal from './Modal';
import Button from './Button';
import { secrets } from '@/../lib/utils';
import LoadingIcon from './LoadingIcon';
import CustomIcon from './CustomIcon';

interface ImageProps {
  height: number;
  width: number;
}

const ImageContainer = styled(Box)`
  width: 100%;
  cursor: pointer;
  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;

    &.loading {
      max-height: 0px !important;
      visibility: hidden !important;
    }
  }
`;

const ImageModalContainer = styled(Box)<ImageProps>`
  height: calc(80vh - 32px - 40px - 32px - 16px);
  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: unset !important;
    position: relative !important;
    height: ${(props) => props.height}px !important;
    width: ${(props) => props.width}px !important;
    max-height: calc(80vh - 32px - 40px - 32px - 16px) !important;
    max-width: 100% !important;
    &.loading {
      visibility: hidden !important;
    }
  }
`;

const StyledBox = styled(Box)`
  box-shadow: inset 0px 0px 0px 0px var(--theme-ui-colors-secondary);
  background: var(--theme-ui-colors-projectCardBackground);
  color: var(--theme-ui-colors-projectCardColor);
  transition: all 0.2s linear;
  transition-property: background, box-shadow;
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  border: 1px dashed var(--theme-ui-colors-secondary);

  &:hover {
    box-shadow: inset 0px 0px 0px 2px var(--theme-ui-colors-secondary);
    background: var(--theme-ui-colors-projectCardBGHover);
    transition: all 0.2s linear;
    transition-property: background, box-shadow;
  }

  .info {
    padding: 0.2rem;
    position: relative;
  }

  .typeCircle {
    background: var(--theme-ui-colors-navbarBG);
    border: 3px solid var(--theme-ui-colors-secondary);
    height: 80px;
    width: 80px;
    border-radius: 50px;
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    left: -30px;
    top: -70px;
  }

  .skills {
    display: flex;
    margin: 0.5rem 0;
    .skillWrapper {
      height: 36px;
      width: 36px;
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--theme-ui-colors-projectCardSkillBackground);
      margin-right: 0.4rem;
    }
  }
`;

interface ProjectCardProps {
  project: Project;
}

const ImagePlaceholder: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px',
        height: '100%',
        border: '1px dotted var(--theme-ui-colors-secondary)',
        background: 'var(--theme-ui-colors-projectCardBackground)'
      }}
    >
      <LoadingIcon borderWidth={0} width={30} height={30} />
    </Box>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(1);
  const [mainImageLoading, setMainImageLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);

  const handleClickArrow = (newImage: number): void => {
    setImageLoading(true);
    setSelectedImage(newImage);
  };

  return (
    <>
      {open && (
        <Modal
          handleClose={() => setOpen(false)}
          actions={
            <>
              <Button
                sx={{ marginRight: '1rem' }}
                onClick={() =>
                  selectedImage === 0
                    ? handleClickArrow(project.images.length - 1)
                    : handleClickArrow(selectedImage - 1)
                }
              >
                &#9668;
              </Button>
              {selectedImage + 1} / {project.images.length}
              <Button
                sx={{ marginLeft: '1rem' }}
                onClick={() =>
                  selectedImage === project.images.length - 1
                    ? handleClickArrow(0)
                    : handleClickArrow(selectedImage + 1)
                }
              >
                &#9658;
              </Button>
            </>
          }
        >
          <>
            <ImageModalContainer
              height={project.images[selectedImage].height}
              width={project.images[selectedImage].height}
            >
              {imageLoading && <ImagePlaceholder />}
              <Image
                src={`${secrets.CMS_URL}${project.images[selectedImage].url}`}
                className={`image ${imageLoading && 'loading'}`}
                layout="fill"
                onLoad={() => setImageLoading(false)}
              />
            </ImageModalContainer>
          </>
        </Modal>
      )}
      <StyledBox as="article" title={project.title}>
        <ImageContainer onClick={() => setOpen(true)}>
          {mainImageLoading && <ImagePlaceholder />}
          <Image
            src={`${secrets.CMS_URL}${project.images[0].url}`}
            className={`image ${mainImageLoading && 'loading'}`}
            layout="fill"
            sizes="(max-width: 814px) 668px,
            (max-width: 1449px) 400px,
            515px"
            onLoad={() => setMainImageLoading(false)}
          />
        </ImageContainer>
        <div className="info">
          <div className="typeCircle">
            {project.isHobby ? (
              <LogoNaked name="Side project" height="50px" width="67.267px" />
            ) : (
              'ext.'
            )}
          </div>
          <H4>{project.title}</H4>
          <Text>{project.description}</Text>
          {(project.url || project.github) && (
            <div style={{ margin: '.5rem 0' }}>
              {project.url && (
                <Paragraph sx={{ fontSize: 1 }}>
                  <Link
                    href={project.url}
                    target="_blank"
                    title={`Online demo: ${project.url}`}
                    rel="noreferrer"
                    sx={{
                      textDecoration: 'none',
                      padding: '.4rem',
                      '> svg': { fill: 'primary' },
                      ':hover, :focus': {
                        backgroundColor: 'primary',
                        color: 'background',
                        '> svg': { fill: 'background' }
                      }
                    }}
                  >
                    <CustomIcon
                      name="internet"
                      alt="Code repository"
                      height={15}
                      width={15}
                      style={{ marginRight: '.3rem' }}
                    />{' '}
                    Online Demo
                  </Link>
                </Paragraph>
              )}
              {project.github && (
                <Paragraph sx={{ fontSize: 1 }}>
                  <Link
                    href={project.github}
                    target="_blank"
                    title={`Github code repository: ${project.url}`}
                    rel="noreferrer"
                    sx={{
                      padding: '.4rem',
                      textDecoration: 'none',
                      '> svg': { fill: 'primary' },
                      ':hover, :focus': {
                        backgroundColor: 'primary',
                        color: 'background',
                        '> svg': { fill: 'background' }
                      }
                    }}
                  >
                    <CustomIcon
                      name="code"
                      alt="Code repository"
                      height={15}
                      width={15}
                      style={{ marginRight: '.3rem' }}
                    />{' '}
                    Github repository
                  </Link>
                </Paragraph>
              )}
            </div>
          )}
        </div>
        <div className="skills">
          {project.skill_list.map((item) => (
            <div key={item.skill.id} className="skillWrapper">
              <Image
                title={item.skill.name}
                alt={item.skill.name}
                src={`${secrets.CMS_URL}${item.skill.logo.url}`}
                width={20}
                height={20}
                layout="fixed"
                className="image"
              />
            </div>
          ))}
        </div>
      </StyledBox>
    </>
  );
};

export default ProjectCard;
