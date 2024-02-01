import React from 'react'
import Section from './components/Section'
import PatientData from './components/layout/Form/FormData/PatientData'
import ElectronicData from './components/layout/Form/FormData/ElectronicData'
import NonPrescriptionData from './components/layout/Form/FormData/NonPrescriptionData'
import PatientDataOrder from './components/layout/Form/FormOrder/PatientDataOrder'
import ElectronicOrder from './components/layout/Form/FormOrder/ElectronicOrder'
import PaperOrder from './components/layout/Form/FormOrder/PaperOrder'
import NonPrescriptionOrder from './components/layout/Form/FormOrder/NonPrescrptionOrder'
import Button from './components/ui/Button'
import PaperPrescriptionData from './components/layout/Form/FormData/PaperPrescriptionData'
import { useInputsValue } from './hooks/useInputsValue'
import { useInputFiles } from './hooks/useInputFileValue'
import { useShowPatientData } from './hooks/useShowPatientData'
import { useShowElectronicPrescriptions } from './hooks/useShowElectronicPrescriptions'
import { useShowPaperPrescriptions } from './hooks/useShowPaperPrescriptions'
import { useShowNonPrescriptions } from './hooks/useShowNonPrescriptions'

import PropTypes from 'prop-types'

export const Form = () => {
  const { inputsValue, onChangeValue } = useInputsValue()
  const { fileUploadForms } = useInputFiles()
  const { patientData } = useShowPatientData()
  const { electronicPrescription, addElectroPrescription, deleteElectroPrescription } = useShowElectronicPrescriptions()
  const { imageSrc, handleFileChange, addPaperPrescription, deletePaperPrescription } = useShowPaperPrescriptions()
  const { nonPrescription, addNonPrescription, deleteNonPrescription } = useShowNonPrescriptions()
  console.log(fileUploadForms, imageSrc)
  return (
    <div className={'order'}>
      <Section
        className={'order__section username'}
        title={'Dane Pacjenta'}
        content={
          <PatientData
            data={inputsValue}
            onChange={onChangeValue}
            // result={addPatientData}
          >
          </PatientData>
        }
      >
      </Section>
      <Section
        className={'order__section electronicPrescription'}
        title={'Leki na recepte elektroniczną'}
        content={
          <ElectronicData
            data={inputsValue}
            onChange={onChangeValue}
            result={addElectroPrescription}
          >
          </ElectronicData>
        }
      >
      </Section>
      <Section
        className={'order__section paperPrescription'}
        title={'Leki na receptę papierową'}
        content={
          <>
            <PaperPrescriptionData
              data={fileUploadForms}
              // onAddFile={handleAddForm}
              onChange={handleFileChange}
              result={addPaperPrescription}
            >
            </PaperPrescriptionData>
          </>
        }
      >
      </Section>
      <Section
        className={'order__section nonPrescription'}
        title={'Pozostałe leki'}
        content={
          <NonPrescriptionData
            data={inputsValue}
            onChange={onChangeValue}
            result={addNonPrescription}
          >
          </NonPrescriptionData>
        }
      >
      </Section>
      <Section
        className={'order__section totalOrder'}
        title={'Twoje zamówienie'}
        content={
          <>
            <PatientDataOrder
              data={inputsValue}
              onChange={onChangeValue}
              // result={patientData}
              // remove={deletePatientData}
            >
            </PatientDataOrder>
            <ElectronicOrder
              data={inputsValue}
              onChange={onChangeValue}
              result={electronicPrescription}
              remove={deleteElectroPrescription}
            >
            </ElectronicOrder>
            <PaperOrder
              data={imageSrc}
              result={imageSrc}
              resul2={fileUploadForms}
              remove={deletePaperPrescription}
            >
            </PaperOrder>
            <NonPrescriptionOrder
              data={inputsValue}
              onChange={onChangeValue}
              result={nonPrescription}
              remove={deleteNonPrescription}
            >
            </NonPrescriptionOrder>
          </>
        }
      >
      </Section>
      <Button
        type={'submit'}
        className={'button'}
        text={'Zamawiam'}
      >
      </Button>
    </div>
  )
}

Form.propTypes = {
  className: PropTypes.string
}

export default Form
