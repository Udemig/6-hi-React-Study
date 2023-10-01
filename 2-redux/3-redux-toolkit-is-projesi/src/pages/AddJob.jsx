import React from 'react'
import { v4 } from 'uuid';
import { statusOption, typeOption } from '../helpers/constants'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddJob = () => {

  const navigate = useNavigate()

  const handleSubmit = (e) => {

    e.preventDefault()

    //Form Dtasını oluşturma
    const form = new FormData(e.target)
    //formdaki değerlerden bir obje oluşturma
    const newJob = Object.fromEntries(form.entries())

    if (!newJob.type || !newJob.status) {
      toast.info('tüm alanları doldurunuz')

      return
    }


    //id ekleme
    newJob.id = v4()

    //tarih ekleme
    newJob.date = new Date().toLocaleDateString()
    //console.log(newJob)

    axios.post('http://localhost:3050/jobs', newJob).then(() => {

      //Ekleme başarılı bildirimi
      toast.success('İş Başarıyla Eklendi')



    }
    ).catch((error) => toast.error('Beklenmedik bir hata oluştu...'))



  }
  return (
    <div className='add-sec'>

      <h2>Yeni İş Ekle</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="">Pozisyon</label>
          <input type="text" required name='position' />
        </div>
        <div>
          <label htmlFor="">Şirket</label>
          <input type="text" required name='company' />
        </div>
        <div>
          <label htmlFor="">Lokasyon</label>
          <input type="text" required name='location' />
        </div>
        <div>
          <label htmlFor="">Durum</label>
          <select name='status'>
            <option selected disabled >Seçiniz</option>
            {statusOption.map((status, i) => (
              <option key={i}>{status}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Tür</label>
          <select name='type'>
            <option selected disabled >Seçiniz</option>
            {typeOption.map((status, i) => (
              <option key={i}>{status}</option>
            ))}
          </select>
        </div>

        <div>
          <button>Ekle</button>
        </div>
      </form>


      <ToastContainer />
    </div>
  )
}

export default AddJob