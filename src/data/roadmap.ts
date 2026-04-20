import type { Phase } from '../types/roadmap'

export const roadmap: Phase[] = [
	{
		id: 'phase-1',
		number: 1,
		title: 'Фундамент — основы рисования',
		months: 'Месяцы 1–3 · с нуля до уверенного базиса',
		color: '#9FE1CB',
		colorSoft: 'rgba(127, 255, 158, 0.15)',
		goals: [
			'Линии и формы',
			'Перспектива 1–2 точки',
			'Базовый свет и тень',
			'Пропорции',
			'Гештальт и композиция'
		],
		tools: [
			'Photoshop — базовые кисти',
			'Планшет — привыкание к нажиму',
			'Бумага + карандаш (параллельно)'
		],
		resources: [
			{
				title: 'Drawabox.com — уроки 1–3',
				subtitle:
					'Линии, эллипсы, органические формы. Системный бесплатный курс по основам.',
				type: 'free'
			},
			{
				title: 'YouTube: Proko — How to draw',
				subtitle: 'Наблюдательное рисование, базовые формы тела.',
				type: 'free'
			},
			{
				title: 'YouTube: Ctrl+Paint — Digital Painting 101',
				subtitle: 'Освоение Photoshop под рисование с нуля.',
				type: 'free'
			},
			{
				title: 'Fun with a Pencil — Andrew Loomis',
				subtitle: 'Классика по пропорциям и конструкции головы.',
				type: 'paid'
			}
		],
		deliverable: {
			title: 'Результат фазы',
			description:
				'30+ скетчей базовых объектов, комнат, простых персонажей в перспективе.'
		},
		steps: [
			{ id: 'p1-s1', title: 'Линии, штриховка, базовые формы' },
			{ id: 'p1-s2', title: 'Перспектива — 1-точечная и 2-точечная' },
			{ id: 'p1-s3', title: 'Анатомия — голова, торс, руки' }
		]
	},
	{
		id: 'phase-2',
		number: 2,
		title: 'Цвет, свет и рендер в Photoshop',
		months: 'Месяцы 4–6 · от силуэта до готового арта',
		color: '#5DCAA5',
		colorSoft: 'rgba(93, 212, 164, 0.15)',
		goals: [
			'Теория цвета',
			'Освещение',
			'Value over Color',
			'Workflow в Photoshop',
			'Материалы'
		],
		tools: ['Photoshop — слои, маски', 'Color wheel', 'PureRef — референсы'],
		resources: [
			{
				title: 'Ctrl+Paint — Color & Light',
				subtitle: 'Бесплатная библиотека по цвету, свету и базису.',
				type: 'free'
			},
			{
				title: 'Schoolism — Painting with Light & Color',
				subtitle: 'Один из лучших курсов по колориту.',
				type: 'paid'
			},
			{
				title: 'Color and Light — James Gurney',
				subtitle: 'Фундаментальная книга по цвету и свету.',
				type: 'paid'
			},
			{
				title: 'YouTube: Marc Brunet — рендер в PS',
				subtitle: 'Практические speed-paint разборы.',
				type: 'free'
			}
		],
		deliverable: {
			title: 'Результат фазы',
			description:
				'5–8 законченных иллюстраций: пропы, окружения, простые персонажи.'
		},
		steps: [
			{ id: 'p2-s1', title: 'Цветовая теория и палитра' },
			{ id: 'p2-s2', title: 'Световые схемы и тени' },
			{ id: 'p2-s3', title: 'Рендер материалов — металл, кожа, ткань' }
		]
	},
	{
		id: 'phase-3',
		number: 3,
		title: 'Специализация — концепт пропов и окружений',
		months: 'Месяцы 7–10 · первые профессиональные работы',
		color: 'rgb(96, 165, 250)',
		colorSoft: 'rgba(96, 165, 250, 0.15)',
		goals: [
			'Prop design',
			'Environment sketch',
			'Thumbnail workflow',
			'Перспектива 3 точки',
			'Mood и атмосфера',
			'Storytelling в арте'
		],
		tools: [
			'Photoshop — custom brushes',
			'SketchUp — 3D-референс',
			'Pinterest / ArtStation — референсы'
		],
		resources: [
			{
				title: 'CGMA — Environment Design',
				subtitle: 'Сильная школа для концепт-художников.',
				type: 'paid'
			},
			{
				title: 'YouTube: FZDSCHOOL',
				subtitle: 'Большая база бесплатных уроков по концепт-арту.',
				type: 'free'
			},
			{
				title: 'Gumroad — Environment Sketching',
				subtitle: 'Разбор мышления и процесса sci-fi окружений.',
				type: 'paid'
			},
			{
				title: 'ArtStation Learning',
				subtitle: 'Уроки от профессионалов индустрии.',
				type: 'free'
			}
		],
		deliverable: {
			title: 'Результат фазы',
			description:
				'2–3 полных концепт-листа и 4–5 environment thumbnails с раскраской.'
		},
		steps: [
			{ id: 'p3-s1', title: 'Дизайн пропов и weapon sheets' },
			{ id: 'p3-s2', title: 'Environment thumbnails и композиция' },
			{ id: 'p3-s3', title: 'Финальный ортографический лист' }
		]
	},
	{
		id: 'phase-4',
		number: 4,
		title: 'Персонажи и нарратив',
		months: 'Месяцы 11–14 · расширение портфолио',
		color: 'rgb(167, 139, 250)',
		colorSoft: 'rgba(167, 139, 250, 0.15)',
		goals: [
			'Character design',
			'Анатомия',
			'Costume и silhouette',
			'Turnaround sheet',
			'Narrative illustration',
			'Брифы и art direction'
		],
		tools: [
			'Photoshop — финальный пайплайн',
			'DesignDoll / PoseMyArt',
			'Blender — базовый свет'
		],
		resources: [
			{
				title: 'Schoolism — Visual Storytelling',
				subtitle: 'Нарратив в персонажном концепт-арте.',
				type: 'paid'
			},
			{
				title: 'CGMA — Character Design',
				subtitle: 'Практический курс по персонажам.',
				type: 'paid'
			},
			{
				title: 'Proko — анатомия фигуры',
				subtitle: 'Пропорции и основные мышечные группы.',
				type: 'free'
			},
			{
				title: 'The Skillful Huntsman',
				subtitle: 'Разбор реального процесса создания концепт-арта.',
				type: 'paid'
			}
		],
		deliverable: {
			title: 'Результат фазы',
			description: '2–3 полных персонажных листа и 1–2 нарративных иллюстрации.'
		},
		steps: [
			{ id: 'p4-s1', title: 'Character design — силуэт и читаемость' },
			{ id: 'p4-s2', title: 'Turnaround sheet персонажа' },
			{ id: 'p4-s3', title: 'Narrative illustration — 1 финальная работа' }
		]
	},
	{
		id: 'phase-5',
		number: 5,
		title: 'Портфолио, специализация и выход на рынок',
		months: 'Месяцы 15–18 · готовность к junior-позиции',
		color: 'rgb(244, 114, 182)',
		colorSoft: 'rgba(244, 114, 182, 0.15)',
		goals: [
			'Выбор стиля / ниши',
			'Полировка портфолио',
			'Art test подготовка',
			'LinkedIn + ArtStation SEO',
			'Freelance / студии'
		],
		tools: ['ArtStation', 'Behance', 'LinkedIn', 'Notion — трекинг откликов'],
		resources: [
			{
				title: 'Portfolio для концепт-художника',
				subtitle: 'Что реально хотят арт-директора.',
				type: 'free'
			},
			{
				title: 'Communities: ArtStation / форумы / Reddit',
				subtitle: 'Фидбек, нетворкинг, обсуждения.',
				type: 'free'
			},
			{
				title: 'Concept Art Portfolio Bootcamp',
				subtitle: 'Подготовка портфолио к рынку.',
				type: 'paid'
			},
			{
				title: 'ArtStation Challenges',
				subtitle: 'Реальные дедлайны и рост через практику.',
				type: 'free'
			}
		],
		deliverable: {
			title: 'Финальное портфолио',
			description:
				'10–12 работ высокого качества: окружения, персонажи, пропы, breakdown.'
		},
		steps: [
			{ id: 'p5-s1', title: 'Отбор и доработка 8–10 работ' },
			{ id: 'p5-s2', title: 'ArtStation — оформление и SEO' },
			{ id: 'p5-s3', title: 'Первые заявки и фидбек' }
		]
	}
]
