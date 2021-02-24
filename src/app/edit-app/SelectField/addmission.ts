import { field, value } from '../../global.model';

export let AddmissionField: Array<field> = [
  {
    'type': 'textarea',
    'icon': 'fa-text-width',
    'label': 'Chief Complaint'
  },
  {
    'type': 'textarea',
    'icon': 'fa-text-width',
    'label': 'Present Illness'
  },
  {
    'type': 'textarea',
    'icon': 'fa-text-width',
    'label': 'Past History'
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Personal History',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'textarea',
        'label': 'Smoking Day',
        'value': ''
      }
    ]
  },
  {
    'type': 'textarea',
    'icon': 'fa-text-width',
    'label': 'Family History'
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'General',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'textarea',
        'label': 'Temperature',
        'value': ''
      },
      {
        'type': 'checkbox',
        'label': 'Body weight loss',
        'value': 'Body weight loss'
      },
      {
        'type': 'checkbox',
        'label': 'Body weight gain',
        'value': 'Body weight gain'
      },
      {
        'type': 'checkbox',
        'label': 'Fatigue',
        'value': 'Fatigue'
      },
      {
        'type': 'checkbox',
        'label': 'Chills',
        'value': 'Chills'
      },
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Head',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Trauma',
        'value': 'Trauma'
      },
      {
        'type': 'checkbox',
        'label': 'Headache',
        'value': 'Headache'
      },
      {
        'type': 'checkbox',
        'label': 'Dizziness',
        'value': 'Dizziness'
      },
      {
        'type': 'checkbox',
        'label': 'Syncope',
        'value': 'Syncope'
      },
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Eyes',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Glasses',
        'value': 'Glasses'
      },
      {
        'type': 'checkbox',
        'label': 'Photophobia',
        'value': 'Photophobia'
      },
      {
        'type': 'checkbox',
        'label': 'Blurring',
        'value': 'Blurring'
      },
      {
        'type': 'checkbox',
        'label': 'Diplopia',
        'value': 'Diplopia'
      },
      {
        'type': 'checkbox',
        'label': 'Irritation',
        'value': 'Irritation'
      },
      {
        'type': 'checkbox',
        'label': 'Dry eyes',
        'value': 'Dry eyes'
      },
      {
        'type': 'checkbox',
        'label': 'Excessive tearing',
        'value': 'Excessive tearing'
      },
      {
        'type': 'checkbox',
        'label': 'History of cataracts',
        'value': 'History of cataracts'
      },
      {
        'type': 'checkbox',
        'label': 'History of glaucoma',
        'value': 'History of glaucoma'
      },
      {
        'type': 'checkbox',
        'label': 'Ptosis',
        'value': 'Ptosis'
      },
      {
        'type': 'checkbox',
        'label': 'Pain',
        'value': 'Pain'
      },
      {
        'type': 'checkbox',
        'label': 'Eyelid swelling',
        'value': 'Eyelid swelling'
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Ears',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Tinnitus',
        'value': 'Tinnitus'
      },
      {
        'type': 'checkbox',
        'label': 'Otalgia',
        'value': 'Otalgia'
      },
      {
        'type': 'checkbox',
        'label': 'Otorrhea',
        'value': 'Otorrhea'
      },
      {
        'type': 'checkbox',
        'label': 'Vertigo',
        'value': 'Vertigo'
      },
      {
        'type': 'checkbox',
        'label': 'History of ear infections',
        'value': 'History of ear infections'
      },
      {
        'type': 'checkbox',
        'label': 'Hearing impairment',
        'value': 'Hearing impairment'
      },
      {
        'type': 'checkbox',
        'label': 'Inflammatory change',
        'value': 'Inflammatory change'
      },
      {
        'type': 'checkbox',
        'label': 'Epistaxis',
        'value': 'Epistaxis'
      },
      {
        'type': 'checkbox',
        'label': 'Nasal obstruction',
        'value': 'Nasal obstruction'
      },
      {
        'type': 'checkbox',
        'label': 'Sinus problems',
        'value': 'Sinus problems'
      },
      {
        'type': 'checkbox',
        'label': 'Sense of smell loss',
        'value': 'Sense of smell loss'
      },
      {
        'type': 'checkbox',
        'label': 'Rhinorrhea',
        'value': 'Rhinorrhea'
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Nose',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Epistaxis',
        'value': 'Epistaxis'
      },
      {
        'type': 'checkbox',
        'label': 'Nasal obstruction',
        'value': 'Nasal obstruction'
      },
      {
        'type': 'checkbox',
        'label': 'Sinus problems',
        'value': 'Sinus problems'
      },
      {
        'type': 'checkbox',
        'label': 'Sense of smell loss',
        'value': 'Sense of smell loss'
      },
      {
        'type': 'checkbox',
        'label': 'Rhinorrhea',
        'value': 'Rhinorrhea'
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Mouth',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Bleeding gums',
        'value': 'Bleeding gums'
      },
      {
        'type': 'checkbox',
        'label': 'Voice change',
        'value': 'Voice change'
      },
      {
        'type': 'checkbox',
        'label': 'Swallowing disturbance',
        'value': 'Swallowing disturbance'
      },
      {
        'type': 'checkbox',
        'label': 'Pain over the oral cavity and tongue',
        'value': 'Pain over the oral cavity and tongue'
      },
      {
        'type': 'checkbox',
        'label': 'Ulcerations over buccal mucosa',
        'value': 'Ulcerations over buccal mucosa'
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Neck',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Pain over the neck',
        'value': 'Pain over the neck'
      },
      {
        'type': 'checkbox',
        'label': 'Neck stiffness',
        'value': 'Neck stiffness'
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Skin',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Rashes',
        'value': 'Rashes'
      },
      {
        'type': 'checkbox',
        'label': 'Pruritus',
        'value': 'Pruritus'
      },
      {
        'type': 'checkbox',
        'label': 'Bruising',
        'value': 'Bruising'
      },
      {
        'type': 'checkbox',
        'label': 'Itching',
        'value': 'Itching'
      },
      {
        'type': 'checkbox',
        'label': 'Hair loss',
        'value': 'Hair loss'
      },
      {
        'type': 'checkbox',
        'label': 'Skin cancer',
        'value': 'Skin cancer'
      },
      {
        'type': 'checkbox',
        'label': 'Cyanosis',
        'value': 'Cyanosis'
      },
      {
        'type': 'checkbox',
        'label': 'Atrophy',
        'value': 'Atrophy'
      },
      {
        'type': 'checkbox',
        'label': 'Bullae fotmation',
        'value': 'Bullae fotmation'
      },
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Respiratory',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Chest pain',
        'value': 'Chest pain'
      },
      {
        'type': 'checkbox',
        'label': 'Sneezing',
        'value': 'Sneezing'
      },
      {
        'type': 'checkbox',
        'label': 'Dyspnea',
        'value': 'Dyspnea'
      },
      {
        'type': 'checkbox',
        'label': 'Night sweats',
        'value': 'Night sweats'
      },
      {
        'type': 'checkbox',
        'label': 'Cough',
        'value': 'Cough'
      },
      {
        'type': 'checkbox',
        'label': 'Hemoptysis',
        'value': 'Hemoptysis'
      },
      {
        'type': 'checkbox',
        'label': 'Expectoration',
        'value': 'Expectoration'
      },
      {
        'type': 'checkbox',
        'label': 'History of pneumonia or TB',
        'value': 'History of pneumonia or TB'
      },
      {
        'type': 'checkbox',
        'label': 'Dyspnea',
        'value': 'Dyspnea'
      },
      {
        'type': 'checkbox',
        'label': 'Exertion',
        'value': 'Exertion'
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Cardiovasclular',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Intermittent claudication',
        'value': 'Intermittent claudication'
      },
      {
        'type': 'checkbox',
        'label': 'Varicose vein',
        'value': 'Varicose vein'
      },
      {
        'type': 'checkbox',
        'label': 'History of MI(Myocardial Infarction)',
        'value': 'History of MI(Myocardial Infarction)'
      },
      {
        'type': 'checkbox',
        'label': 'Orthopnea',
        'value': 'Orthopnea'
      },
      {
        'type': 'checkbox',
        'label': 'Exertional dyspnea',
        'value': 'Exertional dyspnea'
      },
      {
        'type': 'checkbox',
        'label': 'Palpitation',
        'value': 'Palpitation'
      },
      {
        'type': 'checkbox',
        'label': 'Chest tightness',
        'value': 'Chest tightness'
      },
      {
        'type': 'checkbox',
        'label': 'Coldness of Limbs',
        'value': 'Coldness of Limbs'
      },
      {
        'type': 'checkbox',
        'label': 'Syncope',
        'value': 'Syncope'
      },
      {
        'type': 'checkbox',
        'label': 'Fainting',
        'value': 'Fainting'
      },
      {
        'type': 'checkbox',
        'label': 'Chest pain',
        'value': 'Chest pain'
      },
      {
        'type': 'checkbox',
        'label': 'Peripheral edema',
        'value': 'Peripheral edema'
      },
      {
        'type': 'checkbox',
        'label': 'Paroxysmal noctural dyspnea',
        'value': 'Paroxysmal noctural dyspnea'
      },
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Gastrointestinal',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Dysphagia',
        'value': 'Dysphagia'
      },
      {
        'type': 'checkbox',
        'label': 'Heart burn',
        'value': 'Heart burn'
      },
      {
        'type': 'checkbox',
        'label': 'Acid regurgitation',
        'value': 'Acid regurgitation'
      },
      {
        'type': 'checkbox',
        'label': 'Hematemesis',
        'value': 'Hematemesis'
      },
      {
        'type': 'checkbox',
        'label': 'Indigestion',
        'value': 'Indigestion'
      },
      {
        'type': 'checkbox',
        'label': 'Constipation',
        'value': 'Constipation'
      },
      {
        'type': 'checkbox',
        'label': 'Melena',
        'value': 'Melena'
      },
      {
        'type': 'checkbox',
        'label': 'Clay-color stool',
        'value': 'Clay-color stool'
      },
      {
        'type': 'checkbox',
        'label': 'Hiccup',
        'value': 'Hiccup'
      },
      {
        'type': 'checkbox',
        'label': 'Difficult swallowing',
        'value': 'Difficult swallowing'
      },
      {
        'type': 'checkbox',
        'label': 'Hemorrhoids',
        'value': 'Hemorrhoids'
      },
      {
        'type': 'checkbox',
        'label': 'Intolerance for greasy food',
        'value': 'Intolerance for greasy food'
      },
      {
        'type': 'checkbox',
        'label': 'Tenesmus',
        'value': 'Tenesmus'
      },
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Endocrine',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Polyuria',
        'value': 'Polyuria'
      },
      {
        'type': 'checkbox',
        'label': 'Polydipsia',
        'value': 'Polydipsia'
      },
      {
        'type': 'checkbox',
        'label': 'Loss of body weight',
        'value': 'Loss of body weight'
      },
      {
        'type': 'checkbox',
        'label': 'Weight gain',
        'value': 'Weight gain'
      },
      {
        'type': 'checkbox',
        'label': 'Polyphagia',
        'value': 'Polyphagia'
      },
      {
        'type': 'checkbox',
        'label': 'Hormone therapy',
        'value': 'Hormone therapy'
      },
      {
        'type': 'checkbox',
        'label': 'Loss of libido',
        'value': 'Loss of libido'
      },
      {
        'type': 'checkbox',
        'label': 'Tremor',
        'value': 'Tremor'
      },
      {
        'type': 'checkbox',
        'label': 'Heat intolerance',
        'value': 'Heat intolerance'
      },
      {
        'type': 'checkbox',
        'label': 'Abnormal growth,',
        'value': 'Abnormal growth,'
      },
      {
        'type': 'checkbox',
        'label': 'Growth retardation',
        'value': 'Growth retardation'
      },
      {
        'type': 'checkbox',
        'label': 'Proptosis',
        'value': 'Proptosis'
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Musculoskeletal',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Trauma',
        'value': 'Trauma'
      },
      {
        'type': 'checkbox',
        'label': 'Arthralgia',
        'value': 'Arthralgia'
      },
      {
        'type': 'checkbox',
        'label': 'Twitching',
        'value': 'Twitching'
      },
      {
        'type': 'checkbox',
        'label': 'Myalgia',
        'value': 'Myalgia'
      },
      {
        'type': 'checkbox',
        'label': 'Tenderness',
        'value': 'Tenderness'
      },
      {
        'type': 'checkbox',
        'label': 'Back pain',
        'value': 'Back pain'
      },
      {
        'type': 'checkbox',
        'label': 'Morning joint stiffness',
        'value': 'Morning joint stiffness'
      },
      {
        'type': 'checkbox',
        'label': 'Numbness',
        'value': 'Numbness'
      },
      {
        'type': 'checkbox',
        'label': 'Joint swelling',
        'value': 'Joint swelling'
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Hematology',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Bleeding tendency',
        'value': 'Bleeding tendency'
      },
      {
        'type': 'checkbox',
        'label': 'Gum bleeding',
        'value': 'Gum bleeding'
      },
      {
        'type': 'checkbox',
        'label': 'Anemia',
        'value': 'Anemia'
      },
      {
        'type': 'checkbox',
        'label': 'Easy bruising',
        'value': 'Easy bruising'
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Neurology',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Seizure',
        'value': 'Seizure'
      },
      {
        'type': 'checkbox',
        'label': 'Syncope',
        'value': 'Syncope'
      },
      {
        'type': 'checkbox',
        'label': 'Weakness',
        'value': 'Weakness'
      },
      {
        'type': 'checkbox',
        'label': 'Mood swing',
        'value': 'Mood swing'
      },
      {
        'type': 'checkbox',
        'label': 'Weakness',
        'value': 'Weakness'
      },
      {
        'type': 'checkbox',
        'label': 'Sleep disturbance',
        'value': 'Sleep disturbance'
      },
      {
        'type': 'checkbox',
        'label': 'Paresthesia',
        'value': 'Paresthesia'
      },
      {
        'type': 'checkbox',
        'label': 'Slurring speech',
        'value': 'Slurring speech'
      },
      {
        'type': 'checkbox',
        'label': 'Emotional disturbance',
        'value': 'Emotional disturbance'
      },
      {
        'type': 'checkbox',
        'label': 'Drug and alcohol problems',
        'value': 'Drug and alcohol problems'
      },
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Psychiatric',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Sleep disturbance',
        'value': 'Sleep disturbance'
      },
      {
        'type': 'checkbox',
        'label': 'Mood swing',
        'value': 'Mood swing'
      },
      {
        'type': 'checkbox',
        'label': 'Abnormal speech',
        'value': 'Abnormal speech'
      },
      {
        'type': 'checkbox',
        'label': 'Abnormal behavior',
        'value': 'Abnormal behavior'
      },
      {
        'type': 'checkbox',
        'label': 'Thought disturbance',
        'value': 'Thought disturbance'
      },
      {
        'type': 'checkbox',
        'label': 'Perception disturbance',
        'value': 'Perception disturbance'
      },
      {
        'type': 'checkbox',
        'label': 'Disorientation to time',
        'value': 'Disorientation to time'
      },
      {
        'type': 'checkbox',
        'label': 'Place and person',
        'value': 'Place and person'
      },
      {
        'type': 'checkbox',
        'label': 'Intellectual function disturbance',
        'value': 'Intellectual function disturbance'
      },
      {
        'type': 'checkbox',
        'label': 'Suicide problem',
        'value': 'Suicide problem'
      },
      {
        'type': 'checkbox',
        'label': 'Drug or alcohol problem',
        'value': 'Drug or alcohol problem'
      },
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Psychiatric',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Sleep disturbance',
        'value': 'Sleep disturbance'
      },
      {
        'type': 'checkbox',
        'label': 'Mood swing',
        'value': 'Mood swing'
      },
      {
        'type': 'checkbox',
        'label': 'Abnormal speech',
        'value': 'Abnormal speech'
      },
      {
        'type': 'checkbox',
        'label': 'Abnormal behavior',
        'value': 'Abnormal behavior'
      },
      {
        'type': 'checkbox',
        'label': 'Thought disturbance',
        'value': 'Thought disturbance'
      },
      {
        'type': 'checkbox',
        'label': 'Perception disturbance',
        'value': 'Perception disturbance'
      },
      {
        'type': 'checkbox',
        'label': 'Disorientation to time',
        'value': 'Disorientation to time'
      },
      {
        'type': 'checkbox',
        'label': 'Place and person',
        'value': 'Place and person'
      },
      {
        'type': 'checkbox',
        'label': 'Intellectual function disturbance',
        'value': 'Intellectual function disturbance'
      },
      {
        'type': 'checkbox',
        'label': 'Suicide problem',
        'value': 'Suicide problem'
      },
      {
        'type': 'checkbox',
        'label': 'Drug or alcohol problem',
        'value': 'Drug or alcohol problem'
      },
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Physical - General',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Anemic conjunctiva',
        'value': 'Anemic conjunctiva'
      },
      {
        'type': 'checkbox',
        'label': 'Icteric sclera',
        'value': 'Icteric sclera'
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Physical - Head',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Jugular vein engorgement',
        'value': 'Jugular vein engorgement'
      },
      {
        'type': 'checkbox',
        'label': "Virchow's node",
        'value': "Virchow's node"
      },
      {
        'type': 'checkbox',
        'label': 'Tracheal deviation',
        'value': 'Tracheal deviation'
      },
      {
        'type': 'checkbox',
        'label': 'Generalized Lymph nodes enlargement',
        'value': 'Generalized Lymph nodes enlargement'
      },
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Physical - Neck',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Supple',
        'value': 'Supple'
      },
      {
        'type': 'checkbox',
        'label': 'Neck stiffness',
        'value': 'Neck stiffness'
      },
      {
        'type': 'checkbox',
        'label': 'Meningeal sign',
        'value': 'Meningeal sign'
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Physical - Chest & Lungs',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Deformity',
        'value': 'Deformity'
      },
      {
        'type': 'checkbox',
        'label': 'Surgical scar',
        'value': 'Surgical scar'
      },
      {
        'type': 'checkbox',
        'label': 'Using of accessory muscle',
        'value': 'Using of accessory muscle'
      },
      {
        'type': 'checkbox',
        'label': 'Spider angiomata',
        'value': 'Spider angiomata'
      },
      {
        'type': 'checkbox',
        'label': 'Normal respiratory rhythm',
        'value': 'Normal respiratory rhythm'
      },
      {
        'type': 'checkbox',
        'label': 'Barrel chest',
        'value': 'Barrel chest'
      },
      {
        'type': 'checkbox',
        'label': 'Gynecomastia',
        'value': 'Gynecomastia'
      },
      {
        'type': 'checkbox',
        'label': 'Crackles',
        'value': 'Crackles'
      },
      {
        'type': 'checkbox',
        'label': 'Coarse rales',
        'value': 'Coarse rales'
      },
      {
        'type': 'checkbox',
        'label': 'Breathing sound decrease',
        'value': 'Breathing sound decrease'
      },
      {
        'type': 'checkbox',
        'label': 'Stridor',
        'value': 'Stridor'
      },
      {
        'type': 'checkbox',
        'label': 'Wheezing',
        'value': 'Wheezing'
      },
      {
        'type': 'checkbox',
        'label': 'Rhonchi',
        'value': 'Rhonchi'
      },
      {
        'type': 'checkbox',
        'label': 'Basal rales',
        'value': 'Basal rales'
      },
      {
        'type': 'checkbox',
        'label': 'Vocal fremitus',
        'value': 'Vocal fremitus'
      },
      {
        'type': 'checkbox',
        'label': 'Tenderness',
        'value': 'Tenderness'
      },
      {
        'type': 'checkbox',
        'label': 'Mass palpable',
        'value': 'Mass palpable'
      },
      {
        'type': 'checkbox',
        'label': 'Crepitus',
        'value': 'Crepitus'
      },
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Physical - Heart',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Thrill',
        'value': 'Thrill'
      },
      {
        'type': 'checkbox',
        'label': 'Heave',
        'value': 'Heave'
      },
      {
        'type': 'checkbox',
        'label': 'Normal heart size',
        'value': 'Normal heart size'
      },
      {
        'type': 'checkbox',
        'label': 'Regular heart beats',
        'value': 'Regular heart beats'
      },
      {
        'type': 'checkbox',
        'label': 'Ectopic beat',
        'value': 'Ectopic beat'
      },
      {
        'type': 'checkbox',
        'label': 'Click',
        'value': 'Click'
      },
      {
        'type': 'checkbox',
        'label': 'Murmur',
        'value': 'Murmur'
      },
      {
        'type': 'checkbox',
        'label': 'Accentuatin of first heart sound',
        'value': 'Accentuatin of first heart sound'
      },
      {
        'type': 'checkbox',
        'label': 'Gallop rhythm',
        'value': 'Gallop rhythm'
      },
      {
        'type': 'checkbox',
        'label': 'Opening snap',
        'value': 'Opening snap'
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Physical - Abdomen',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Flat',
        'value': 'Flat'
      },
      {
        'type': 'checkbox',
        'label': 'Distension',
        'value': 'Distension'
      },
      {
        'type': 'checkbox',
        'label': 'Striae',
        'value': 'Striae'
      },
      {
        'type': 'checkbox',
        'label': 'Globular',
        'value': 'Globular'
      },
      {
        'type': 'checkbox',
        'label': 'Superficial vein engorgement',
        'value': 'Superficial vein engorgement'
      },
      {
        'type': 'checkbox',
        'label': 'Scaphoid shape',
        'value': 'Scaphoid shape'
      },
      {
        'type': 'checkbox',
        'label': 'Ecchymosis',
        'value': 'Ecchymosis'
      },
      {
        'type': 'checkbox',
        'label': 'Hernia',
        'value': 'Hernia'
      },
      {
        'type': 'checkbox',
        'label': 'Operation scar',
        'value': 'Operation scar'
      },
      {
        'type': 'checkbox',
        'label': "Cullen's sign",
        'value': "Cullen's sign"
      },
      {
        'type': 'checkbox',
        'label': "Turner's sign",
        'value': "Turner's sign"
      },
      {
        'type': 'checkbox',
        'label': 'Succussion splash',
        'value': 'Succussion splash'
      },
      {
        'type': 'checkbox',
        'label': 'Borborygmus',
        'value': 'Borborygmus'
      },
      {
        'type': 'checkbox',
        'label': 'Increased bowel movement',
        'value': 'Increased bowel movement'
      },
      {
        'type': 'checkbox',
        'label': 'Ileus',
        'value': 'Ileus'
      },
      {
        'type': 'checkbox',
        'label': 'Shifting dullness',
        'value': 'Shifting dullness'
      },
      {
        'type': 'checkbox',
        'label': 'Central tympanic',
        'value': 'Central tympanic'
      },
      {
        'type': 'checkbox',
        'label': 'Knocking pain',
        'value': 'Knocking pain'
      },
      {
        'type': 'checkbox',
        'label': 'Tenderness',
        'value': 'Tenderness'
      },
      {
        'type': 'checkbox',
        'label': 'Muscle guarding',
        'value': 'Muscle guarding'
      },
      {
        'type': 'checkbox',
        'label': 'Rebounding pain',
        'value': 'Rebounding pain'
      },
      {
        'type': 'checkbox',
        'label': 'Palpable mass',
        'value': 'Palpable mass'
      },
      {
        'type': 'checkbox',
        'label': 'Splenomegaly',
        'value': 'Splenomegaly'
      },
      {
        'type': 'checkbox',
        'label': "Murphy's sign",
        'value': "Murphy's sign"
      },
      {
        'type': 'checkbox',
        'label': 'Pounding pulsation',
        'value': 'Pounding pulsation'
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Physical - Back & Spine',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Knocking pain over both CV angles',
        'value': 'Knocking pain over both CV angles'
      },
      {
        'type': 'checkbox',
        'label': 'Kyphosis',
        'value': 'Kyphosis'
      },
      {
        'type': 'checkbox',
        'label': 'Scoliosis',
        'value': 'Scoliosis'
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Physical - Extremities(Upper)',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Clubbing fingerss',
        'value': 'Clubbing fingerss'
      },
      {
        'type': 'checkbox',
        'label': 'Fine tremors',
        'value': 'Fine tremors'
      },
      {
        'type': 'checkbox',
        'label': 'Joint deformity',
        'value': 'Joint deformity'
      },
      {
        'type': 'checkbox',
        'label': 'Palmar erythema',
        'value': 'Palmar erythema'
      },
      {
        'type': 'checkbox',
        'label': 'Abnormal radial pulse',
        'value': 'Abnormal radial pulse'
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Physical - Extremities(Lower)',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Shin spots',
        'value': 'Shin spots'
      },
      {
        'type': 'checkbox',
        'label': 'Pitting edema',
        'value': 'Pitting edema'
      },
      {
        'type': 'checkbox',
        'label': 'Erythema',
        'value': 'Erythema'
      },
      {
        'type': 'checkbox',
        'label': 'Temperature difference',
        'value': 'Temperature difference'
      },
      {
        'type': 'checkbox',
        'label': 'Varicose vein',
        'value': 'Varicose vein'
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Physical - Neurologic',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'textarea',
        'label': 'Consciousness',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'Level',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'GCS',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'Speech',
        'value': ''
      },
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Mental and nutritional conditions',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'textarea',
        'label': 'Unplanned weight loss in past 3-6 months',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'BMI(kg/m2)',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'If patient is acutely ill and there has been or is likely to be no nutritional intake for >5 days',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'Total score',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'Risk of malnutrition',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'Management',
        'value': ''
      },
    ]
  },
  {
    'type': 'textarea',
    'icon': 'fa-text-width',
    'label': 'Impression'
  },
  {
    'type': 'textarea',
    'icon': 'fa-text-width',
    'label': 'Plan to do & Goal'
  },
];
