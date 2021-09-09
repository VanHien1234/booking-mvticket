//actions
import  MovieApi, { fecthAllMovieBanner }  from 'Api/MovieApi';
import { SET_BANNER } from 'redux/types/CarouselType';

export const getCarouselAct = () =>{

    return async (dispatch) =>{
        try {
            const result = await fecthAllMovieBanner()
            console.log('result1',result)
            dispatch({
                type : SET_BANNER,
                arrImg : result.data.content

            })
            

        }catch(errors){
            console.log('error',errors)
        }
    }
    
}