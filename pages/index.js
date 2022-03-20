import { createClient } from 'contentful';
import Image from 'next/image';

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const resp = await client.getEntries({content_type: 'hero' })

  return {
    props: {
      hero: resp.items
    }
  }

}

export default function Home({hero}) {
  const { ctaButtonLink, 
          paragraph, 
          principalHeading, 
          mainBackgroundImage: {
            fields:{
              file:{
                url,
                details: {
                  image:{
                    height,
                    width,
                  }
                }
              }
            }
          } 
        } = hero[0].fields
  return (
    <div className="hero-container">
      <Image
        src={'https:' + url} 
        width={width}
        height={height}
      />
      <p>button link: {ctaButtonLink}</p>
      <p>paragraph: {paragraph}</p>
      <p>principalHeading: {principalHeading}</p>
      <p>url:{url}</p>
    </div>
  )
}