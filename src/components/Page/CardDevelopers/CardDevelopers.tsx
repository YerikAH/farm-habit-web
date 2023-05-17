import { DEVELOPER_LIST } from './card_developers'
import IconGithub from '../../../assets/images/IconGithub'
import IconLinkedin from '../../../assets/images/IconLinkedin'
import s from './card_developers.module.css'

const CardDevelopers = () => {
  return (
    <div className={s.card}>
      {DEVELOPER_LIST.map((item) => (
        <div className={s.card_dev} key={item.id}>
          <img src={item.image} alt='developer' className={s.card_dev_image}/>
          <p className={s.card_dev_name}>{item.name}</p>
          <p className={s.card_dev_job}>{item.job}</p>
          <div className={s.card_dev_buttons}>
            <a href='' target='_blank' tabIndex={1}>
              <IconLinkedin />
            </a>
            <a href='' target='_blank' tabIndex={1}>
              <IconGithub />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardDevelopers
