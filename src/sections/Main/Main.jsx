import React from 'react'
import Grid from '@material-ui/core/Grid'

import { CoffeeCard } from '../../components'
import { data } from '../../constants'

const Main = () => {
    return (
        <Grid
            container
            spacing={4}
        >
            {data.map((item) => (
                <Grid
                    key={item.title}
                    item
                    xs={12}
                    sm={4}
                >
                    <CoffeeCard
                        avatarSrc={item.avatarUrl}
                        title={item.title}
                        subTitle={item.price}
                        description={item.description}
                        imgSrc={item.imageUrl}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default Main
