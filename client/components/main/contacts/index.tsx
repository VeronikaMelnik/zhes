import { Paper, Typography } from '@mui/material'

export const Contacts = () => {
  return (
    <Paper>
      <Typography variant='h4'>
        {'Способы связи '}
      </Typography>
      <Typography variant='body1'>
        {'Электронное обращение - во вкладке «Отправить обращение»'}
      </Typography>
      <Typography variant='body1'>
        {'Телефонный звонок - по номеру телефона +375(33)384-43-79 '}
      </Typography>
      <Typography variant='body1'>
        {'Письменное обращение - по адресу пр. Независимости, 62 (аудитория №305)'}
      </Typography>
    </Paper>
  )
}