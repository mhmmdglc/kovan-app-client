import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Layout from '../components/layout';
import ItemCard from '../containers/itemCard';


export const ITEMS = gql`
query ItemsForBikes {
  itemsForBikes {
    ttl
    total_count
    nextPage
    data {
      bikes {
        is_reserved
        vehicle_type
        total_bookings
        android
        bike_id
        ios
      }
    }
  }
}
`

const Items = () => {
  const { loading, error, data } = useQuery(ITEMS);
  console.log(data?.itemsForBikes);

  return (
    <Layout >
      {data?.itemsForBikes && <ItemCard item={data?.itemsForBikes} />}
    </Layout>
  )
}

export default Items