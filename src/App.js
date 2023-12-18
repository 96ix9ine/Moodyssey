import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, Panel, PanelHeader, Header, SimpleCell, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Group, Button, Spacing, Title, IconButton, Subhead, Tabbar, TabbarItem, FormItem, FormField, PanelHeaderBack, Avatar, Cell, Switch, Placeholder, Checkbox, Text, Link, Textarea } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import '@vkontakte/icons';
import './styles/Mood.css';
import './styles/StartScreen.css';
import './styles/What is happend.css';
import './styles/Settings.css';
import './styles/Advice.css';
import './styles/Chronicle.css';
import './styles/Statistics.css';
import './styles/Tabbar.css';

import './store/setEmotion'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Icon24Add } from '@vkontakte/icons';
import { Icon28SettingsOutline } from '@vkontakte/icons'
import { Icon28LightbulbStarOutline } from '@vkontakte/icons'
import { Icon28GraphOutline } from '@vkontakte/icons'
import { Icon28ListAddOutline } from '@vkontakte/icons'

import { Icon28BriefcaseOutline } from '@vkontakte/icons'
import { Icon28EducationOutline } from '@vkontakte/icons'
import { Icon28ArmchairOutline } from '@vkontakte/icons'
import { Icon28LikeOutline } from '@vkontakte/icons'
import { Icon28PlaneOutline } from '@vkontakte/icons'
import { Icon28BookSpreadOutline } from '@vkontakte/icons'
import { Icon28MovieReelOutline } from '@vkontakte/icons'
import { Icon28MusicOutline } from '@vkontakte/icons'
import { Icon28AppleOutline } from '@vkontakte/icons'
import { Icon28GameOutline } from '@vkontakte/icons'
import { Icon28Users3Outline } from '@vkontakte/icons'
import { Icon28PaletteOutline } from '@vkontakte/icons'

import { Icon24DoorArrowLeftOutline } from '@vkontakte/icons'
import { Icon24MessageArrowRightOutline } from '@vkontakte/icons'
import { addAction, addEmotion, clearData, clearState, setDate, setEmotionText } from './store/setEmotion';

const App = () => {
	const [activePanel, setActivePanel] = useState('start-screen');
	const [fetchedUser, setUser] = useState(null);
	const dispatch = useDispatch();

	const [simple, setSimple] = useState('');

	const containerStyles = {
		width: '100vw',
		height: '98vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F7F4F2'
	};

	const containerStyles2 = {
		width: '100vw',
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexDirection: 'column',
		backgroundColor: '#F7F4F2'
	}

	const month = {
		1: "янв",
		2: "фев",
		3: "мар",
		4: "апр",
		5: "мая",
		6: "июн",
		7: "июл",
		8: "авг",
		9: "сен",
		10: "окт",
		11: "ноя",
		12: "дек"
	}

	const [textValue, setTextValue] = useState("");

	let currentDate = new Date();
	const [currentDay, setCurrentDay] = useState(currentDate.getDate());
	const [currentMonth, setCurrentMonth] = useState(month[currentDate.getMonth() + 1]);
	currentDate = `${currentDay} ${currentMonth}`

	const emotions = useSelector(state => state.emotion.emotions)
	const date = useSelector(state => state.emotion.date)
	const actions = useSelector(state => state.emotion.actions)
	const emotionText = useSelector(state => state.emotion.emotionText)

	const [isGood, setIsGood] = useState(false);
	const [isBad, setIsBad] = useState(false);

	const IsGood = () => {
		setIsGood(true)
		setIsBad(false)
	}
	const IsBad = () => {
		setIsGood(false)
		setIsBad(true)
	}

	let emotionType = ""
	if (isGood === true) {
		emotionType = "Хорошо"
	}
	if (isBad === true) {
		emotionType = "Плохо"
	}

	const onSubmit = async () => {
		try {
			fetch("http://localhost:5000/api/note/createNote",
				{
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					method: "POST",
					body: JSON.stringify({
						date_value: currentDate,
						emotion_name: `${emotionType}`,
						emotions: `${emotions}`,
						action_name: `${actions}`,
						thoughts_name: `${emotionText}`
					})
				}
			);
		}
		catch (e) {
			console.log(e.data.message);
		}
	}

	const [isActionSelected1, setIsActionSelected1] = useState(true);
	const [isActionSelected2, setIsActionSelected2] = useState(true);
	const [isActionSelected3, setIsActionSelected3] = useState(true);
	const [isActionSelected4, setIsActionSelected4] = useState(true);

	const [isActionSelected5, setIsActionSelected5] = useState(true);
	const [isActionSelected6, setIsActionSelected6] = useState(true);
	const [isActionSelected7, setIsActionSelected7] = useState(true);
	const [isActionSelected8, setIsActionSelected8] = useState(true);

	const [isActionSelected9, setIsActionSelected9] = useState(true);
	const [isActionSelected10, setIsActionSelected10] = useState(true);
	const [isActionSelected11, setIsActionSelected11] = useState(true);
	const [isActionSelected12, setIsActionSelected12] = useState(true);

	const [isEmotionSelected1, setIsEmotionSelected1] = useState(true);
	const [isEmotionSelected2, setIsEmotionSelected2] = useState(true);
	const [isEmotionSelected3, setIsEmotionSelected3] = useState(true);
	const [isEmotionSelected4, setIsEmotionSelected4] = useState(true);
	const [isEmotionSelected5, setIsEmotionSelected5] = useState(true);
	const [isEmotionSelected6, setIsEmotionSelected6] = useState(true);
	const [isEmotionSelected7, setIsEmotionSelected7] = useState(true);
	const [isEmotionSelected8, setIsEmotionSelected8] = useState(true);
	const [isEmotionSelected9, setIsEmotionSelected9] = useState(true);
	const [isEmotionSelected10, setIsEmotionSelected10] = useState(true);
	const [isEmotionSelected11, setIsEmotionSelected11] = useState(true);
	const [isEmotionSelected12, setIsEmotionSelected12] = useState(true);
	const [isEmotionSelected13, setIsEmotionSelected13] = useState(true);
	const [isEmotionSelected14, setIsEmotionSelected14] = useState(true);
	const [isEmotionSelected15, setIsEmotionSelected15] = useState(true);
	const [isEmotionSelected16, setIsEmotionSelected16] = useState(true);
	const [isEmotionSelected17, setIsEmotionSelected17] = useState(true);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			dispatch(setDate(currentDate))
		}
		fetchData();
	}, [currentDate, emotions, actions, date, emotionText, emotionType]);

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout header={<PanelHeader separator={false} />}>
						<SplitCol>
							<View id='start' activePanel={activePanel}>
								<Panel id='start-screen'>
									<Group separator='hide'>
										<div style={containerStyles} className='div-screen'>
											<IconButton className='Logo-button' onClick={() => setActivePanel('start-1')} />
											<Title>Moodyssey</Title>
											<Subhead>vk mini app</Subhead>
										</div>
									</Group>
								</Panel>
								<Panel id='start-1'>
									<Group separator='hide'>
										<div style={containerStyles}>
											<Title className='question'>Чего ты хочешь достичь?</Title>
											<Spacing size={40}></Spacing>
											<Button className='button-general' size="l" appearance="accent">Стать счастливее</Button>
											<Spacing size={40}></Spacing>
											<Button className='button-general' size="l" appearance="accent">Спокойствие</Button>
											<Spacing size={40}></Spacing>
											<Button className='button-general' size="l" appearance="accent">Перебороть страхи</Button>
											<Spacing size={40}></Spacing>
											<Button className='button-general' size="l" appearance="accent">Анализ настроения</Button>
											<Spacing size={100}></Spacing>
											<Button className='button-next' size='s' appearance='positive'
												onClick={() => setActivePanel('start-2')}>Далее</Button>
										</div>
									</Group>
								</Panel>
								<Panel id='start-2'>
									<Group separator='hide'>
										<div style={containerStyles}>
											<PanelHeader separator={false} style={{ width: '100vw' }} before={<PanelHeaderBack onClick={() => setActivePanel('start-1')} />}></PanelHeader>
											<Title className='question-2'>Когда тебе удобнее записывать настроение?</Title>
											<Spacing size={40}></Spacing>
											<Button className='button-general' size="l" appearance="accent">18:00</Button>
											<Spacing size={40}></Spacing>
											<Button className='button-general' size="l" appearance="accent">19:00</Button>
											<Spacing size={40}></Spacing>
											<Button className='button-general' size="l" appearance="accent">20:00</Button>
											<Spacing size={40}></Spacing>
											<Button className='button-general' size="l" appearance="accent">21.00</Button>
											<Spacing size={40}></Spacing>
											<Button className='button-general' size="l" appearance="accent">Выбрать потом</Button>
											<Spacing size={40}></Spacing>
											<Button className='button-next' size='s' appearance='positive'
												onClick={() => setActivePanel("what is happend-1")}>Далее</Button>
										</div>
									</Group>
								</Panel>
								<Panel id='start-3'>
									<Group separator='hide'>
										<div style={containerStyles}>
											<PanelHeader separator={false} style={{ width: '100vw' }} before={<PanelHeaderBack onClick={() => setActivePanel('start-2')} />}></PanelHeader>
											<Title className='question'>Твое настроение</Title>
											<Spacing size={40}></Spacing>
											<Group separator='hide'>
												<div className='mood'></div>
											</Group>
											<Spacing size={100}></Spacing>
											<Tabbar>
												<TabbarItem onClick={() => setActivePanel("chronicle")}>
													<Icon28ListAddOutline />
												</TabbarItem>

												<TabbarItem onClick={() => setActivePanel("statistics")}>
													<Icon28GraphOutline />
												</TabbarItem>

												<TabbarItem onClick={() => setActivePanel("what is happend-1")}>
													<Icon24Add fill='white' className='mood-plus-button' />
												</TabbarItem>

												<TabbarItem onClick={() => setActivePanel("facts and articles")}>
													<Icon28LightbulbStarOutline />
												</TabbarItem>

												<TabbarItem onClick={() => setActivePanel("settings")}>
													<Icon28SettingsOutline />
												</TabbarItem>
											</Tabbar>
										</div>
									</Group>
								</Panel>
								<Panel id='what is happend-1'>
									<Group separator='hide'>
										<div style={containerStyles} className='what-is-happend'>
											<PanelHeader separator={false} style={{ width: '100vw' }} before={<PanelHeaderBack onClick={() => setActivePanel('chronicle')} />}></PanelHeader>
											<Spacing size={100}></Spacing>
											<div className='WIS-animal-1'></div>
											<Title className='WIS-title'>Как ты себя чувствуешь?</Title>
											<Spacing size={40}></Spacing>
											<Tabbar style={{ position: 'static', minWidth: "50%", maxWidth: '75%', borderRadius: '20px' }}>
												<TabbarItem selected={simple === 'one'} onClick={() => `${isGood ? setIsGood(false) : setIsGood(true)} ${setSimple('one')} ${IsGood()}`} text='Хорошо' className='WIS-button-choice'>
												</TabbarItem>
												<TabbarItem selected={simple === 'two'} onClick={() => `${isBad ? setIsBad(false) : setIsBad(true)} ${setSimple('two')} ${IsBad()}`} text='Плохо' className='WIS-button-choice'>
												</TabbarItem>
											</Tabbar>
											<Spacing size={40}></Spacing>
											<div className='WIS-div-buttons'>
												<Button className='WIS-button-save' onClick={() => `${setActivePanel("chronicle")} ${console.log(isGood, isBad, emotionType)}`}>
													<Title className='WIS-title2-screen2'>Сохранить</Title>
												</Button>
												<Button className='WIS-button-save' onClick={() => setActivePanel("what is happend-2")}>
													<Title className='WIS-title2-screen2'>Дополнить</Title>
												</Button>
											</div>
										</div>
									</Group>
								</Panel>
								<Panel id='what is happend-2'>
									<div style={containerStyles}>
										<PanelHeader separator={false} style={{ width: '100vw' }} before={<PanelHeaderBack onClick={() => setActivePanel('what is happend-1')} />}></PanelHeader>
										<div className='WIS-polosa'></div>
										<Group mode='plain' className='WIS-group'>
											<div className='WIS-animal-2'></div>
											<Title className='WIS-title-screen2'>Плохо</Title>
											<Spacing size={10}></Spacing>
											<Subhead className='WIS-subtitle-screen2'>Расскажи что происходит</Subhead>
											<Spacing size={10}></Spacing>
											<div className='WIS-div-grid'>
												<div className='WIS-div-grid-components'>
													<IconButton onClick={() => {
														isActionSelected1 ? setIsActionSelected1(false) : setIsActionSelected1(true)
														dispatch(addAction("Работа "))
													}}
														id='btn1' className={isActionSelected1 ? 'WIS-iconbutton' : 'checkbox-boxshadow'}>
														<Icon28BriefcaseOutline />
													</IconButton>
													<Title className='WIS-div-grid-components-title'>Работа</Title>
												</div>

												<div className='WIS-div-grid-components'>
													<IconButton onClick={() => {
														isActionSelected2 ? setIsActionSelected2(false) : setIsActionSelected2(true)
														dispatch(addAction("Учеба "))
													}}
														id='btn2' className={isActionSelected2 ? 'WIS-iconbutton' : 'checkbox-boxshadow'}>
														<Icon28EducationOutline />
													</IconButton>
													<Title className='WIS-div-grid-components-title'>Учеба</Title>
												</div>

												<div className='WIS-div-grid-components'>
													<IconButton onClick={() => {
														isActionSelected3 ? setIsActionSelected3(false) : setIsActionSelected3(true)
														dispatch(addAction("Отдых "))
													}}
														id='btn3' className={isActionSelected3 ? 'WIS-iconbutton' : 'checkbox-boxshadow'}>
														<Icon28ArmchairOutline />
													</IconButton>
													<Title className='WIS-div-grid-components-title'>Отдых.</Title>
												</div>

												<div className='WIS-div-grid-components'>
													<IconButton onClick={() => {
														isActionSelected4 ? setIsActionSelected4(false) : setIsActionSelected4(true)
														dispatch(addAction("Отношения "))
													}}
														id='btn4' className={isActionSelected4 ? 'WIS-iconbutton' : 'checkbox-boxshadow'}>
														<Icon28LikeOutline />
													</IconButton>
													<Title className='WIS-div-grid-components-title'>Отношения</Title>
												</div>

												<div className='WIS-div-grid-components'>
													<IconButton onClick={() => {
														isActionSelected5 ? setIsActionSelected5(false) : setIsActionSelected5(true)
														dispatch(addAction("Полет "))
													}}
														id='btn5' className={isActionSelected5 ? 'WIS-iconbutton' : 'checkbox-boxshadow'}>
														<Icon28PlaneOutline />
													</IconButton>
													<Title className='WIS-div-grid-components-title'>Полет</Title>
												</div>

												<div className='WIS-div-grid-components'>
													<IconButton onClick={() => {
														isActionSelected6 ? setIsActionSelected6(false) : setIsActionSelected6(true)
														dispatch(addAction("Чтение "))
													}}
														id='btn6' className={isActionSelected6 ? 'WIS-iconbutton' : 'checkbox-boxshadow'}>
														<Icon28BookSpreadOutline />
													</IconButton>
													<Title className='WIS-div-grid-components-title'>Чтение</Title>
												</div>

												<div className='WIS-div-grid-components'>
													<IconButton onClick={() => {
														isActionSelected7 ? setIsActionSelected7(false) : setIsActionSelected7(true)
														dispatch(addAction("Кино "))
													}}
														id='btn7' className={isActionSelected7 ? 'WIS-iconbutton' : 'checkbox-boxshadow'}>
														<Icon28MovieReelOutline />
													</IconButton>
													<Title className='WIS-div-grid-components-title'>Кино</Title>
												</div>

												<div className='WIS-div-grid-components'>
													<IconButton onClick={() => {
														isActionSelected8 ? setIsActionSelected8(false) : setIsActionSelected8(true)
														dispatch(addAction("Музыка "))
													}}
														id='btn8' className={isActionSelected8 ? 'WIS-iconbutton' : 'checkbox-boxshadow'}>
														<Icon28MusicOutline />
													</IconButton>
													<Title className='WIS-div-grid-components-title'>Музыка</Title>
												</div>

												<div className='WIS-div-grid-components'>
													<IconButton onClick={() => {
														isActionSelected9 ? setIsActionSelected9(false) : setIsActionSelected9(true)
														dispatch(addAction("Еда "))
													}}
														id='btn9' className={isActionSelected9 ? 'WIS-iconbutton' : 'checkbox-boxshadow'}>
														<Icon28AppleOutline />
													</IconButton>
													<Title className='WIS-div-grid-components-title'>Еда</Title>
												</div>

												<div className='WIS-div-grid-components'>
													<IconButton onClick={() => {
														isActionSelected10 ? setIsActionSelected10(false) : setIsActionSelected10(true)
														dispatch(addAction("Игра "))
													}}
														id='btn10' className={isActionSelected10 ? 'WIS-iconbutton' : 'checkbox-boxshadow'}>
														<Icon28GameOutline />
													</IconButton>
													<Title className='WIS-div-grid-components-title'>Игра</Title>
												</div>

												<div className='WIS-div-grid-components'>
													<IconButton onClick={() => {
														isActionSelected11 ? setIsActionSelected11(false) : setIsActionSelected11(true)
														dispatch(addAction("Друзья "))
													}}
														id='btn11' className={isActionSelected11 ? 'WIS-iconbutton' : 'checkbox-boxshadow'}>
														<Icon28Users3Outline />
													</IconButton>
													<Title className='WIS-div-grid-components-title'>Друзья</Title>
												</div>

												<div className='WIS-div-grid-components'>
													<IconButton onClick={() => {
														isActionSelected12 ? setIsActionSelected12(false) : setIsActionSelected12(true)
														dispatch(addAction("Рисование "))
													}}
														id='btn12' className={isActionSelected12 ? 'WIS-iconbutton' : 'checkbox-boxshadow'}>
														<Icon28PaletteOutline />
													</IconButton>
													<Title className='WIS-div-grid-components-title'>Рисование</Title>
												</div>
											</div>
											<FormItem htmlFor='writtingMood'>
												<FormField className='WIS-input-block'>
													<Textarea className='WIS-input' placeholder="Расскажи, что влияет на твое настроение" value={textValue} onChange={e => setTextValue(e.target.value)} maxLength={60}/>
												</FormField>
											</FormItem>
											<div className='WIS-buttons-container'>
												<Button style={{ margin: '10px' }} className='WIS-button-save-2' onClick={() => `${setActivePanel("chronicle")} ${dispatch(setEmotionText(textValue))}`}>
													<Title className='WIS-title2-screen2'>Сохранить</Title>
												</Button>
												<Button style={{ margin: '10px' }} className='WIS-button-change-2' onClick={() => `${setActivePanel("what is happend-3")} ${dispatch(setEmotionText(textValue))}`}>
													<Title className='WIS-title2-screen2'>Дополнить</Title>
												</Button>
											</div>
										</Group>
									</div>
								</Panel>
								<Panel id='what is happend-3'>
									<div style={containerStyles}>
										<PanelHeader separator={false} style={{ width: '100vw' }} before={<PanelHeaderBack onClick={() => setActivePanel('what is happend-2')} />}></PanelHeader>
										<div className='WIS-polosa'></div>
										<Group mode='plain' className='WIS-group'>
											<div className='WIS-animal-2'></div>
											<Title className='WIS-title-screen2'>Плохо</Title>
											<Spacing size={10}></Spacing>
											<Subhead className='WIS-subtitle-screen2'>Расскажи что происходит</Subhead>
											<Spacing size={10}></Spacing>
											<div className='WIS-div-grid2'>
												<div className='WIS-div-grid2-container'>
													<div id='btn1-grid2' className='WIS-div-grid2-container-for-buttons'>
														<IconButton onClick={() => {
															dispatch(addEmotion("Усталость "))
															isEmotionSelected1 ? setIsEmotionSelected1(false) : setIsEmotionSelected1(true)
														}} className={isEmotionSelected1 ? 'WIS-div-grid2-button grid2-button' : 'checkbox-boxshadow2'}>
															<Title className='WIS-grid2-checkbox-title'>Усталость</Title></IconButton>
														<IconButton onClick={() => {
															dispatch(addEmotion("Волнение "))
															isEmotionSelected2 ? setIsEmotionSelected2(false) : setIsEmotionSelected2(true)
														}} className={isEmotionSelected2 ? 'WIS-div-grid2-button grid2-button' : 'checkbox-boxshadow2'}>
															<Title className='WIS-grid2-checkbox-title'>Волнение</Title></IconButton>
													</div>
													<div id='btn2-grid2' className='WIS-div-grid2-container-for-buttons'>
														<IconButton onClick={() => {
															dispatch(addEmotion("Уныние "))
															isEmotionSelected3 ? setIsEmotionSelected3(false) : setIsEmotionSelected3(true)
														}} className={isEmotionSelected3 ? 'WIS-div-grid2-button grid2-button' : 'checkbox-boxshadow2'}>
															<Title className='WIS-grid2-checkbox-title'>Уныние</Title></IconButton>
														<IconButton onClick={() => {
															dispatch(addEmotion("Грусть "))
															isEmotionSelected4 ? setIsEmotionSelected4(false) : setIsEmotionSelected4(true)
														}} className={isEmotionSelected4 ? 'WIS-div-grid2-button grid2-button' : 'checkbox-boxshadow2'}>
															<Title className='WIS-grid2-checkbox-title'>Грусть</Title></IconButton>
														<IconButton onClick={() => {
															dispatch(addEmotion("Досада "))
															isEmotionSelected5 ? setIsEmotionSelected5(false) : setIsEmotionSelected5(true)
														}} className={isEmotionSelected5 ? 'WIS-div-grid2-button grid2-button' : 'checkbox-boxshadow2'}>
															<Title className='WIS-grid2-checkbox-title'>Досада</Title></IconButton>
													</div>
													<div id='btn3-grid2' className='WIS-div-grid2-container-for-buttons'>
														<IconButton onClick={() => {
															dispatch(addEmotion("Огорчение "))
															isEmotionSelected6 ? setIsEmotionSelected6(false) : setIsEmotionSelected6(true)
														}} className={isEmotionSelected6 ? 'WIS-div-grid2-button grid2-button' : 'checkbox-boxshadow2'}>
															<Title className='WIS-grid2-checkbox-title'>Огорчение</Title></IconButton>
														<IconButton onClick={() => {
															dispatch(addEmotion("Упадок духа "))
															isEmotionSelected7 ? setIsEmotionSelected7(false) : setIsEmotionSelected7(true)
														}} className={isEmotionSelected7 ? 'WIS-div-grid2-button grid2-button' : 'checkbox-boxshadow2'}>
															<Title className='WIS-grid2-checkbox-title'>Упадок духа</Title></IconButton>
													</div>
													<div id='btn4-grid2' className='WIS-div-grid2-container-for-buttons'>
														<IconButton onClick={() => {
															dispatch(addEmotion("Стресс "))
															isEmotionSelected8 ? setIsEmotionSelected8(false) : setIsEmotionSelected8(true)
														}} className={isEmotionSelected8 ? 'WIS-div-grid2-button grid2-button' : 'checkbox-boxshadow2'}>
															<Title className='WIS-grid2-checkbox-title'>Стресс</Title></IconButton>
														<IconButton onClick={() => {
															dispatch(addEmotion("Злость "))
															isEmotionSelected9 ? setIsEmotionSelected9(false) : setIsEmotionSelected9(true)
														}} className={isEmotionSelected9 ? 'WIS-div-grid2-button grid2-button' : 'checkbox-boxshadow2'}>
															<Title className='WIS-grid2-checkbox-title'>Злость</Title></IconButton>
														<IconButton onClick={() => {
															dispatch(addEmotion("Страх "))
															isEmotionSelected10 ? setIsEmotionSelected10(false) : setIsEmotionSelected10(true)
														}} className={isEmotionSelected10 ? 'WIS-div-grid2-button grid2-button' : 'checkbox-boxshadow2'}>
															<Title className='WIS-grid2-checkbox-title'>Страх</Title></IconButton>
													</div>
													<div id='btn5-grid2' className='WIS-div-grid2-container-for-buttons'>
														<IconButton onClick={() => {
															dispatch(addEmotion("Нервозность "))
															isEmotionSelected11 ? setIsEmotionSelected11(false) : setIsEmotionSelected11(true)
														}} className={isEmotionSelected11 ? 'WIS-div-grid2-button grid2-button' : 'checkbox-boxshadow2'}>
															<Title className='WIS-grid2-checkbox-title'>Нервозность</Title></IconButton>
														<IconButton onClick={() => {
															dispatch(addEmotion("Отвращение "))
															isEmotionSelected12 ? setIsEmotionSelected12(false) : setIsEmotionSelected12(true)
														}} className={isEmotionSelected12 ? 'WIS-div-grid2-button grid2-button' : 'checkbox-boxshadow2'}>
															<Title className='WIS-grid2-checkbox-title'>Отвращение</Title></IconButton>
													</div>
													<div id='btn6-grid2' className='WIS-div-grid2-container-for-buttons'>
														<IconButton onClick={() => {
															dispatch(addEmotion("Стыд "))
															isEmotionSelected13 ? setIsEmotionSelected13(false) : setIsEmotionSelected13(true)
														}} className={isEmotionSelected13 ? 'WIS-div-grid2-button grid2-button' : 'checkbox-boxshadow2'}>
															<Title className='WIS-grid2-checkbox-title'>Стыд</Title></IconButton>
														<IconButton onClick={() => {
															dispatch(addEmotion("Зависть "))
															isEmotionSelected14 ? setIsEmotionSelected14(false) : setIsEmotionSelected14(true)
														}} className={isEmotionSelected14 ? 'WIS-div-grid2-button grid2-button' : 'checkbox-boxshadow2'}>
															<Title className='WIS-grid2-checkbox-title'>Зависть</Title></IconButton>
														<IconButton onClick={() => {
															dispatch(addEmotion("Гнев "))
															isEmotionSelected15 ? setIsEmotionSelected15(false) : setIsEmotionSelected15(true)
														}} className={isEmotionSelected15 ? 'WIS-div-grid2-button grid2-button' : 'checkbox-boxshadow2'}>
															<Title className='WIS-grid2-checkbox-title'>Гнев</Title></IconButton>
													</div>
													<div id='btn7-grid2' className='WIS-div-grid2-container-for-buttons'>
														<IconButton onClick={() => {
															dispatch(addEmotion("Беспокойство "))
															isEmotionSelected16 ? setIsEmotionSelected16(false) : setIsEmotionSelected16(true)
														}} className={isEmotionSelected16 ? 'WIS-div-grid2-button grid2-button' : 'checkbox-boxshadow2'}>
															<Title className='WIS-grid2-checkbox-title'>Беспокойство</Title></IconButton>
														<IconButton onClick={() => {
															dispatch(addEmotion("Ненависть "))
															isEmotionSelected17 ? setIsEmotionSelected17(false) : setIsEmotionSelected17(true)
														}} className={isEmotionSelected17 ? 'WIS-div-grid2-button grid2-button' : 'checkbox-boxshadow2'}>
															<Title className='WIS-grid2-checkbox-title'>Ненависть</Title></IconButton>
													</div>
												</div>
											</div>
											<IconButton style={{ marginTop: '20px' }} className='WIS-button-save' onClick={() => `${setActivePanel("chronicle")} ${onSubmit()}`}>
												<Title className='WIS-title2-screen2'>Сохранить</Title>
											</IconButton>
										</Group>
									</div>
								</Panel>
								<Panel id='settings'>
									<div className='settings-div'>
										<PanelHeader separator={false} style={{ width: '100vw' }} before={<PanelHeaderBack onClick={() => setActivePanel('chronicle')} />}></PanelHeader>
										<div className='settings-polosa'></div>
										<Spacing size={40}></Spacing>
										<Title className='settings-title'>Настройки</Title>
										<Spacing size={40}></Spacing>
										<Group style={{ width: '100vw', height: '100vh', backgroundColor: '#F6F3F1' }}>
											<Cell className='settings-cell'
												before={fetchedUser?.photo_200 ? <Avatar src={fetchedUser?.photo_200} /> : null}
												subtitle={fetchedUser?.city && fetchedUser?.city.title ? fetchedUser?.city.title : ''}
											>
												{`${fetchedUser?.first_name} ${fetchedUser?.last_name}`}
											</Cell>
											<Spacing size={20}></Spacing>
											<Group mode='plain'>
												<SimpleCell Component="label" after={<Switch />} style={{ color: 'black' }}>
													Уведомления
												</SimpleCell>
											</Group>
											<Group mode='plain'>
												<SimpleCell onClick={() => setActivePanel('policy')} after={<Icon24DoorArrowLeftOutline />} style={{ color: 'black' }}>
													Политика конфиденциальности
												</SimpleCell>
											</Group>
											<Group mode='plain'>
												<SimpleCell after={<Icon24MessageArrowRightOutline />}>
													<Link href='https://vk.com/app51801024'>Поделиться приложением</Link>
												</SimpleCell>
											</Group>
										<Tabbar>
											<TabbarItem className='tabbarItem' onClick={() => setActivePanel("chronicle")}>												
												<Icon28ListAddOutline />
												<Text className='tabbarItem-text'>Записи</Text>
											</TabbarItem>

											<TabbarItem className='tabbarItem' onClick={() => setActivePanel("statistics")}>
												<Icon28GraphOutline />
												<Text className='tabbarItem-text'>Статистика</Text>
											</TabbarItem>

											<TabbarItem className='tabbarItem' onClick={() => `${setActivePanel("what is happend-1")} ${dispatch(clearData())}`}>
												<Icon24Add fill='white' className='mood-plus-button' />											
											</TabbarItem>

											<TabbarItem className='tabbarItem'>
												<Icon28LightbulbStarOutline />
												<Text className='tabbarItem-text'>Статьи<span className='tabbarItem-text-span'>cкоро</span></Text>
											</TabbarItem>

											<TabbarItem className='tabbarItem' onClick={() => setActivePanel("settings")}>
												<Icon28SettingsOutline />
												<Text className='tabbarItem-text'>Настройки</Text>
											</TabbarItem>
										</Tabbar>
										</Group>
									</div>
								</Panel>
								<Panel id='policy'>
									<PanelHeader before={<PanelHeaderBack onClick={() => setActivePanel('settings')} />}>Политика конфиденциальности</PanelHeader>
									<Placeholder>Текст заглушка который не несет какой-либо смысловой нагрузки</Placeholder>
								</Panel>
								<Panel id='facts and articles'>
									<div style={containerStyles2}>
										<PanelHeader separator={false} style={{ width: '100vw' }} before={<PanelHeaderBack onClick={() => setActivePanel('chronicle')} />}></PanelHeader>
										<Spacing size={0}></Spacing>
										<div className='advice-polosa'>
											<Title className='advice-title'>Советы</Title>
										</div>
										<Group separator='hide' mode='plain' >
											<Spacing size={20}></Spacing>
											<Title className='advice-title-2'>Факты</Title>
											<Spacing size={40}></Spacing>
											<Button className='advice-button' onClick={() => setActivePanel("facts")}>
												Чем умнее человек, тем чаще он не уверен в своих собственных убеждениях.
											</Button>
											<Spacing size={40}></Spacing>
											<Title className='advice-title-2'>Статьи</Title>
											<Spacing size={40}></Spacing>
											<Button className='advice-button' onClick={() => setActivePanel("articles")}>
												Если после общения с конкретным человеком вы испытываете негативные эмоции и чувствуете неприятный осадок – вы имели дело с токсичной персоной.
											</Button>
											<Spacing size={20}></Spacing>
											<Button className='advice-button' onClick={() => setActivePanel("articles")}>
												80% людей встречают своих будущих супругов в возрасте 16 лет.
											</Button>
											<Spacing size={20}></Spacing>
											<Button className='advice-button-3' onClick={() => setActivePanel("articles")}>
												Вы с больше вероятностью достигнете целей, если будете держать их при себе.</Button>
											<Tabbar>
												<TabbarItem onClick={() => setActivePanel("chronicle")}>
													<Icon28ListAddOutline />
												</TabbarItem>

												<TabbarItem onClick={() => setActivePanel("statistics")}>
													<Icon28GraphOutline />
												</TabbarItem>

												<TabbarItem onClick={() => setActivePanel("what is happend-1")}>
													<Icon24Add fill='white' className='mood-plus-button' />
												</TabbarItem>

												<TabbarItem onClick={() => setActivePanel("facts and articles")}>
													<Icon28LightbulbStarOutline />
												</TabbarItem>

												<TabbarItem onClick={() => setActivePanel("settings")}>
													<Icon28SettingsOutline />
												</TabbarItem>
											</Tabbar>
										</Group>
									</div>
								</Panel>
								<Panel id='facts'>
									<PanelHeader before={<PanelHeaderBack onClick={() => setActivePanel('facts and articles')} />}>Ничего</PanelHeader>
									<Placeholder>Тут ничего нет</Placeholder>
								</Panel>
								<Panel id='articles'>
									<PanelHeader before={<PanelHeaderBack onClick={() => setActivePanel('facts and articles')} />}>Ничего</PanelHeader>
									<Placeholder>Тут ничего нет</Placeholder>
								</Panel>
								<Panel id='chronicle'>
									<div style={containerStyles2}>
										<PanelHeader separator={false} style={{ width: '100vw' }} before={<PanelHeaderBack onClick={() => setActivePanel('what is happend-3')} />}></PanelHeader>
										<div className='chronicle-polosa'></div>
										<Spacing size={30}></Spacing>
										<Title className='chronicle-title'>Твое настроение</Title>
										<Spacing size={0}></Spacing>
										<Group mode='plain'>
											<div className='chronicle-bigdiv-container'>
												<Group separator='hide'>
													<div className='chronicle-div-container'>
														<div className='chronicle-div-date' >{currentDate}</div>
														<div className='chronicle-div-entry'>
															<div className='chronicle-div-emoji emoji-1'></div>
															<div className='chronicle-div-zag'>
																<Title className='chronicle-div-title'>{emotionType}</Title>
																<Text className='chronicle-div-text-actions'>{actions}</Text>
																<Text className='chronicle-div-text-emotions'>{emotions}</Text>												
																<Subhead className='chronicle-div-subtitle'>{emotionText}</Subhead>
															</div>
														</div>
													</div>
												</Group>
											</div>
										</Group>
										<Spacing size={100}></Spacing>
										<Tabbar>
											<TabbarItem className='tabbarItem' onClick={() => setActivePanel("chronicle")}>												
												<Icon28ListAddOutline />
												<Text className='tabbarItem-text'>Записи</Text>
											</TabbarItem>

											<TabbarItem className='tabbarItem' onClick={() => setActivePanel("statistics")}>
												<Icon28GraphOutline />
												<Text className='tabbarItem-text'>Статистика</Text>
											</TabbarItem>

											<TabbarItem className='tabbarItem' onClick={() => `${setActivePanel("what is happend-1")} ${dispatch(clearData()), clearState()}`}>
												<Icon24Add fill='white' className='mood-plus-button' />											
											</TabbarItem>

											<TabbarItem className='tabbarItem'>
												<Icon28LightbulbStarOutline />
												<Text className='tabbarItem-text'>Статьи<span className='tabbarItem-text-span'>cкоро</span></Text>
											</TabbarItem>

											<TabbarItem className='tabbarItem' onClick={() => setActivePanel("settings")}>
												<Icon28SettingsOutline />
												<Text className='tabbarItem-text'>Настройки</Text>
											</TabbarItem>
										</Tabbar>
									</div>
								</Panel>
								<Panel id='statistics'>
									<Group separator='hide'>
										<div style={containerStyles}>
											<PanelHeader separator={false} style={{ width: '100vw' }} before={<PanelHeaderBack onClick={() => setActivePanel('chronicle')} />}></PanelHeader>
											<Title className='statistics-title'>Статистика</Title>
											<Spacing size={40}></Spacing>
											<Tabbar style={{ position: 'static', minWidth: "50%", maxWidth: '85%', borderRadius: '30px' }}>
												<TabbarItem selected={simple === 'one'} onClick={() => setSimple('one')} text='Неделя' className='statistics-button-choice'></TabbarItem>
												<TabbarItem selected={simple === 'two'} onClick={() => setSimple('two')} text='Месяц' className='statistics-button-choice'></TabbarItem>
												<TabbarItem selected={simple === 'three'} onClick={() => setSimple('three')} text='Все время' className='statistics-button-choice'></TabbarItem>
											</Tabbar>
											<div className='statistics-divshow'></div>
											<div className='statistics-div-legend'>
												<div className='statistics-div-legend-circle green'></div>
												<Title className='statistics-div-legend-title'>Хорошо</Title>
											</div>
											<div className='statistics-div-legend'>
												<div className='statistics-div-legend-circle purple'></div>
												<Title className='statistics-div-legend-title'>Плохо</Title>
											</div>
											<div className='statistics-div-legend'>
												<div className='statistics-div-legend-circle yellow'></div>
												<Title className='statistics-div-legend-title'>Сложно сказать</Title>
											</div>
											<div className='statistics-div-legend'>
												<div className='statistics-div-legend-circle brown'></div>
												<Title className='statistics-div-legend-title'>Подавлен</Title>
											</div>
											<div className='statistics-div-legend'>
												<div className='statistics-div-legend-circle orange'></div>
												<Title className='statistics-div-legend-title'>Несчастен</Title>
											</div>
											<Tabbar>
											<TabbarItem className='tabbarItem' onClick={() => setActivePanel("chronicle")}>												
												<Icon28ListAddOutline />
												<Text className='tabbarItem-text'>Записи</Text>
											</TabbarItem>

											<TabbarItem className='tabbarItem' onClick={() => setActivePanel("statistics")}>
												<Icon28GraphOutline />
												<Text className='tabbarItem-text'>Статистика</Text>
											</TabbarItem>

											<TabbarItem className='tabbarItem' onClick={() => `${setActivePanel("what is happend-1")} ${dispatch(clearData())}`}>
												<Icon24Add fill='white' className='mood-plus-button' />											
											</TabbarItem>

											<TabbarItem className='tabbarItem'>
												<Icon28LightbulbStarOutline />
												<Text className='tabbarItem-text'>Статьи<span className='tabbarItem-text-span'>cкоро</span></Text>
											</TabbarItem>

											<TabbarItem className='tabbarItem' onClick={() => setActivePanel("settings")}>
												<Icon28SettingsOutline />
												<Text className='tabbarItem-text'>Настройки</Text>
											</TabbarItem>
										</Tabbar>
										</div>
									</Group>
								</Panel>
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
