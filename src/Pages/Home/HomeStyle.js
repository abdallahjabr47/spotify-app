import { styled } from '@mui/material/styles';

export const Container = styled('div')`
  .playlist {
    margin: 65px 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;

    .image {
      img {
        height: 15rem;
        width: 15rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
      }
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: #e0dede;

      .title {
        color: white;
        font-size: 4rem;
      }
    }
  }

  .list {
    .header-row {
      display: grid;
      grid-template-columns: 0.3fr 3fr 2fr 0.1fr;
      margin: 1rem 0 0 0;
      color: #dddcdc;
      top: 15vh;
      padding: 1rem 3rem;
      transition: 0.3s ease-in-out;
      background-color: ${({ headerBackground }) =>
        headerBackground ? '#000000dc' : 'none'};
    }

    .tracks {
      margin: 0 2rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 5rem;

      .row {
        cursor: pointer;
        padding: 0.5rem 1rem;
        display: grid;
        grid-template-columns: 0.3fr 3.1fr 2fr 0.1fr;

        &:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }

        .col {
          display: flex;
          align-items: center;
          color: #dddcdc;

          img {
            height: 40px;
            width: 40px;
          }
        }

        .detail {
          display: flex;
          gap: 1rem;

          .info {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }

  @media screen and (max-width: 820px) {
    .playlist {
      flex-direction: column;
      margin: 2rem;

      .details {
        .title {
          font-size: 2rem;
        }
      }
    }

    .list {
      .header-row {
        padding: 2rem;
      }

      .tracks {
        margin: 0 1.5rem;
        margin-bottom: 3rem;

        .row {
          padding: 0.5rem;

          .col {
            img {
              height: 30px;
              width: 30px;
            }

            .info {
              .nameArtists {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 420px) {
    .playlist {
      margin: 1rem;

      .details {
        .title {
          font-size: 1.5rem;
        }
      }
    }

    .list {
      .header-row {
        padding: 0.5rem;
      }

      .tracks {
        margin: 0 0.5rem;
        margin-bottom: 2rem;

        .row {
          padding: 0.5rem;

          .col {
            img {
              height: 25px;
              width: 25px;
            }

            .info {
              .nameArtists {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
`;