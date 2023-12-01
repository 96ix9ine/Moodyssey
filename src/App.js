import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, Panel, PanelHeader, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Group, Button, Separator, Spacing, Title, IconButton, Subhead, Image, Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import '@vkontakte/icons'
import './styles/Mood.css';
import './styles/StartScreen.css';

import {Icon24Add} from '@vkontakte/icons';
import {Icon28SettingsOutline} from '@vkontakte/icons'
import {Icon28LightbulbStarOutline} from '@vkontakte/icons'
import {Icon28GraphOutline} from '@vkontakte/icons'
import {Icon28ListAddOutline} from '@vkontakte/icons'

const App = () => {
	const [activePanel, setActivePanel] = useState('start-screen');
	const [fetchedUser, setUser] = useState(null);
	// const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	// const go = e => {
	// 	setActivePanel(e.currentTarget.dataset.to);
	// };

	const containerStyles = {
		width: 'auto',
		height: 'auto',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F7F4F2'
	  };

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout header={<PanelHeader separator={false}/>}>
						<SplitCol>
							<View id='start' activePanel={activePanel}>
								<Panel id='start-screen'>
									<Group separator='hide'>
										<div className='div-screen'>
											<IconButton className='Logo-button' onClick={() => setActivePanel('start-1')}/>
											<Title>Moodyssey</Title>
											<Subhead>vk mini app</Subhead>
											<Spacing size={380}></Spacing>
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
											<Spacing size={100}></Spacing>
										</div>
									</Group>
								</Panel>
								<Panel id='start-2'>
									<Group separator='hide'>
										<div style={containerStyles}>
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
											onClick={() => setActivePanel('start-3')}>Далее</Button>
											<Spacing size={80}></Spacing>
										</div>
									</Group>
								</Panel>
								<Panel id='start-3'>
									<Group separator='hide'>
										<div style={containerStyles}>
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
											onClick={() => setActivePanel("start-4")}>Далее</Button>
											<Spacing size={80}></Spacing>
										</div>
									</Group>
								</Panel>
								<Panel id='start-4'>
									<Group separator='hide'>
										<div style={containerStyles}>
											<Title className='question'>Твое настроение</Title>
											<Spacing size={40}></Spacing>
											<Group separator='hide'>
												<div className='mood'></div>
											</Group>
											<Spacing size={100}></Spacing>
											<Epic>
												<Tabbar>
													<TabbarItem>
														<IconButton
														onClick={() => setActivePanel("#")}>
															<Icon28ListAddOutline/>
														</IconButton>
													</TabbarItem>

													<TabbarItem>
														<IconButton
														onClick={() => setActivePanel("#")}>
															<Icon28GraphOutline/>
														</IconButton>
													</TabbarItem>

													<TabbarItem>
														<IconButton className='mood-plus-button'
														onClick={() => setActivePanel("start-screen")}>
															<Icon24Add/>
														</IconButton>
													</TabbarItem>
													
													<TabbarItem>
														<IconButton
														onClick={() => setActivePanel("#")}>
															<Icon28LightbulbStarOutline/>
														</IconButton>
													</TabbarItem>
													
													<TabbarItem>
														<IconButton
														onClick={() => setActivePanel("#")}>
															<Icon28SettingsOutline/>
														</IconButton>
													</TabbarItem>
												</Tabbar>
											</Epic>
											<Spacing size={150}></Spacing>
										</div>
									</Group>
								</Panel>
							</View>

							<View id='what is happend'>
								<Panel>
									
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
