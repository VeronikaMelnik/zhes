import { Paper, Typography } from '@mui/material'

export const News = () => {
  return (
    <Paper>
      
      <Typography variant='h4' textAlign={'center'}>
        {'Последние новости!'}
      </Typography>
      <Typography variant='body1' textAlign={'center'}>
        {'В Витебске сломались трубы из-заневыносимого холода!'}
      </Typography>
      <Typography variant='body1'textAlign={'center'}>
        {'На немиге начинают строительство жилых домов. Окончание планируется в 2053 году'}
      </Typography>
      <Typography variant='body1' textAlign={'center'}>
        {'ЖЭС сменил телефонный номер со «115» на «116»!'}
      </Typography>
      <Typography variant='body1' textAlign={'center'}>
        {'Дома в советском районе проходят капитальный ремонт в 2020-2023 годах!'}
      </Typography>
      <Typography variant='body1' textAlign={'center'}>
        {'Если у вас отключили отопление, оставляйте в названии обращения кодовое слово "ОТОПЛЕНИЕ" для более быстрой обратной связи'}
      </Typography>
    </Paper>
  )
}