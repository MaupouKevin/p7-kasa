import React from "react";
import Rating from "../Rating/Rating";

function HousingInfos({ title, location, tags, host, rating }) {

  return (
      <article className='housinginfos'>
          <section className='housinginfos_info'>
              <h1 className='housinginfos_info_title'>{title}</h1>
              <h2 className='housinginfos_info_location'>{location}</h2>
              <div className='housinginfos_info_tags'>
                {tags.map((tag) => (<span className='housinginfos_info_tags_tag' key={tag}>{tag}</span>))}
              </div>
          </section>
          <section className='housinginfos_rates'>
              <div className='housinginfos_rates_host'>
                  <h2 className='housinginfos_rates_host_name' >{host.name}</h2>
                  <img className='housinginfos_rates_host_picture' src={host.picture} alt='host'/>
              </div>
              <Rating rating={rating} />
          </section>

      </article>
  );
}

export default HousingInfos
