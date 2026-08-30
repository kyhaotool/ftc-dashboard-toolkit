// ============================================================
// FTC Dashboard - Multi-language Translations
// Languages: English, Vietnamese, Japanese, Korean, Chinese
// ============================================================

const LANGUAGES = {
    en: { name: 'English', flag: '🇺🇸' },
    vi: { name: 'Tiếng Việt', flag: '🇻🇳' },
    ja: { name: '日本語', flag: '🇯🇵' },
    ko: { name: '한국어', flag: '🇰🇷' },
    zh: { name: '中文', flag: '🇨🇳' }
};

const TRANSLATIONS = {
    // === COMMON ===
    'app_title': {
        en: 'FTC Dashboard Toolkit',
        vi: 'Bộ Công Cụ FTC Dashboard',
        ja: 'FTC ダッシュボードツールキット',
        ko: 'FTC 대시보드 툴킷',
        zh: 'FTC 仪表盘工具包'
    },
    'simulation_mode': {
        en: 'Simulation Mode',
        vi: 'Chế độ mô phỏng',
        ja: 'シミュレーションモード',
        ko: '시뮬레이션 모드',
        zh: '模拟模式'
    },
    'connected': {
        en: 'Connected',
        vi: 'Đã kết nối',
        ja: '接続済み',
        ko: '연결됨',
        zh: '已连接'
    },
    'disconnected': {
        en: 'Disconnected',
        vi: 'Ngắt kết nối',
        ja: '未接続',
        ko: '연결 끊어짐',
        zh: '未连接'
    },
    'back_to_dashboard': {
        en: '← Back to Dashboard',
        vi: '← Quay lại Dashboard',
        ja: '← ダッシュボードに戻る',
        ko: '← 대시보드로 돌아가기',
        zh: '← 返回仪表盘'
    },
    'copy_to_clipboard': {
        en: 'Copy to Clipboard',
        vi: 'Sao chép vào Clipboard',
        ja: 'クリップボードにコピー',
        ko: '클립보드에 복사',
        zh: '复制到剪贴板'
    },
    'download': {
        en: 'Download',
        vi: 'Tải xuống',
        ja: 'ダウンロード',
        ko: '다운로드',
        zh: '下载'
    },
    'close': {
        en: 'Close',
        vi: 'Đóng',
        ja: '閉じる',
        ko: '닫기',
        zh: '关闭'
    },
    'export': {
        en: 'Export',
        vi: 'Xuất',
        ja: 'エクスポート',
        ko: '내보내기',
        zh: '导出'
    },
    'save': {
        en: 'Save',
        vi: 'Lưu',
        ja: '保存',
        ko: '저장',
        zh: '保存'
    },
    'start': {
        en: 'Start',
        vi: 'Bắt đầu',
        ja: '開始',
        ko: '시작',
        zh: '开始'
    },
    'stop': {
        en: 'Stop',
        vi: 'Dừng',
        ja: '停止',
        ko: '중지',
        zh: '停止'
    },
    'apply': {
        en: 'Apply',
        vi: 'Áp dụng',
        ja: '適用',
        ko: '적용',
        zh: '应用'
    },
    'clear': {
        en: 'Clear',
        vi: 'Xóa',
        ja: 'クリア',
        ko: '지우기',
        zh: '清除'
    },
    'record': {
        en: 'Record',
        vi: 'Ghi lại',
        ja: '記録',
        ko: '녹화',
        zh: '录制'
    },
    'recording': {
        en: 'Recording...',
        vi: 'Đang ghi...',
        ja: '記録中...',
        ko: '녹화 중...',
        zh: '录制中...'
    },
    'calculate': {
        en: 'Calculate',
        vi: 'Tính toán',
        ja: '計算',
        ko: '계산',
        zh: '计算'
    },
    'reset': {
        en: 'Reset',
        vi: 'Đặt lại',
        ja: 'リセット',
        ko: '리셋',
        zh: '重置'
    },
    'status': {
        en: 'Status',
        vi: 'Trạng thái',
        ja: 'ステータス',
        ko: '상태',
        zh: '状态'
    },
    'config': {
        en: 'Config',
        vi: 'Cấu hình',
        ja: '設定',
        ko: '구성',
        zh: '配置'
    },
    'results': {
        en: 'Results',
        vi: 'Kết quả',
        ja: '結果',
        ko: '결과',
        zh: '结果'
    },
    'log': {
        en: 'Log',
        vi: 'Nhật ký',
        ja: 'ログ',
        ko: '로그',
        zh: '日志'
    },
    'chart': {
        en: 'Chart',
        vi: 'Biểu đồ',
        ja: 'チャート',
        ko: '차트',
        zh: '图表'
    },

    // === INDEX PAGE ===
    'tools': {
        en: 'Tools',
        vi: 'Công cụ',
        ja: 'ツール',
        ko: '도구',
        zh: '工具'
    },
    'guide': {
        en: 'Guide & Formulas',
        vi: 'Hướng dẫn & Công thức',
        ja: 'ガイド & フォーミュラ',
        ko: '가이드 & 공식',
        zh: '指南 & 公式'
    },
    'info': {
        en: 'System Info',
        vi: 'Thông tin hệ thống',
        ja: 'システム情報',
        ko: '시스템 정보',
        zh: '系统信息'
    },
    'dashboard_tools': {
        en: 'Dashboard Tools',
        vi: 'Công cụ Dashboard',
        ja: 'ダッシュボードツール',
        ko: '대시보드 도구',
        zh: '仪表盘工具'
    },
    'flywheel_calc': {
        en: 'Flywheel Calculator',
        vi: 'Máy tính Flywheel',
        ja: 'フライホイール計算機',
        ko: '플라이휠 계산기',
        zh: '飞轮计算器'
    },
    'flywheel_calc_desc': {
        en: 'Calculate gear ratio, RPM, velocity, spin-up time for flywheel subsystem.',
        vi: 'Tính gear ratio, RPM, velocity, spin-up time cho flywheel.',
        ja: 'フライホイールのギア比、RPM、速度、スピンアップ時間を計算。',
        ko: '플라이휠의 기어비, RPM, 속도, 스핀업 시간을 계산합니다.',
        zh: '计算飞轮的齿轮比、RPM、速度、加速时间。'
    },
    'pid_autotune': {
        en: 'PID Auto-Tuner',
        vi: 'Tự động tune PID',
        ja: 'PID自動チューナー',
        ko: 'PID 자동 튜너',
        zh: 'PID 自动调参'
    },
    'pid_autotune_desc': {
        en: 'Auto-tune PIDF for motor using Ziegler-Nichols method.',
        vi: 'Tự động tune PIDF cho motor bằng Ziegler-Nichols.',
        ja: 'Ziegler-Nichols法でモーターのPIDFを自動チューニング。',
        ko: 'Ziegler-Nichols 방법으로 모터 PIDF를 자동 튜닝합니다.',
        zh: '使用 Ziegler-Nichols 方法自动调参电机 PIDF。'
    },
    'data_logger': {
        en: 'Data Logger',
        vi: 'Ghi dữ liệu',
        ja: 'データロガー',
        ko: '데이터 로거',
        zh: '数据记录器'
    },
    'data_logger_desc': {
        en: 'Record realtime telemetry, export CSV/JSON/Kotlin config.',
        vi: 'Ghi telemetry realtime, xuất CSV/JSON/Kotlin.',
        ja: 'リアルタイムテレメトリを記録、CSV/JSON/Kotlinをエクスポート。',
        ko: '실시간 텔레메트리를 기록하고 CSV/JSON/Kotlin을 내보냅니다.',
        zh: '记录实时遥测数据，导出 CSV/JSON/Kotlin 配置。'
    },

    // === AUTO-TUNER ===
    'motor_gear_config': {
        en: 'Motor & Gear Config',
        vi: 'Cấu hình Motor & Hộp số',
        ja: 'モーター & ギア設定',
        ko: '모터 & 기어 설정',
        zh: '电机 & 齿轮配置'
    },
    'motor_type': {
        en: 'Motor Type',
        vi: 'Loại motor',
        ja: 'モータータイプ',
        ko: '모터 유형',
        zh: '电机类型'
    },
    'external_gear_ratio': {
        en: 'External Gear Ratio',
        vi: 'Tỷ số hộp số ngoài',
        ja: '外部ギア比',
        ko: '외부 기어비',
        zh: '外部齿轮比'
    },
    'gear_efficiency': {
        en: 'Gear Efficiency (%)',
        vi: 'Hiệu suất hộp số (%)',
        ja: 'ギア効率 (%)',
        ko: '기어 효율 (%)',
        zh: '齿轮效率 (%)'
    },
    'gear_slip': {
        en: 'Gear Slip (%)',
        vi: 'Trượt hộp số (%)',
        ja: 'ギアスリップ (%)',
        ko: '기어 슬립 (%)',
        zh: '齿轮滑移 (%)'
    },
    'target_rpm': {
        en: 'Target RPM',
        vi: 'RPM mục tiêu',
        ja: 'ターゲットRPM',
        ko: '목표 RPM',
        zh: '目标 RPM'
    },
    'num_runs': {
        en: 'Number of Runs',
        vi: 'Số lần chạy',
        ja: '実行回数',
        ko: '실행 횟수',
        zh: '运行次数'
    },
    'num_runs_desc': {
        en: 'More runs = more accurate average',
        vi: 'Nhiều lần = trung bình chính xác hơn',
        ja: '回数が多い = 平均が正確',
        ko: '횟수가 많을수록 평균이 정확',
        zh: '次数越多 = 平均越准确'
    },
    'relay_amplitude': {
        en: 'Relay Amplitude',
        vi: 'Biên độ Relay',
        ja: 'リレー振幅',
        ko: '릴레이 진폭',
        zh: '继电器振幅'
    },
    'relay_cycles': {
        en: 'Relay Cycles',
        vi: 'Chu kỳ Relay',
        ja: 'リレーサイクル',
        ko: '릴레이 주기',
        zh: '继电器周期'
    },
    'settle_time': {
        en: 'Settle Time (ms)',
        vi: 'Thời gian ổn định (ms)',
        ja: '安定時間 (ms)',
        ko: '안정 시간 (ms)',
        zh: '稳定时间 (ms)'
    },
    'step_duration': {
        en: 'Step Duration (s)',
        vi: 'Thời gian Step (s)',
        ja: 'ステップ時間 (s)',
        ko: '스텝 시간 (s)',
        zh: '阶跃时间 (s)'
    },
    'start_autotune': {
        en: 'Start Auto-Tune',
        vi: 'Bắt đầu Auto-Tune',
        ja: '自動チューニング開始',
        ko: '자동 튜닝 시작',
        zh: '开始自动调参'
    },
    'apply_results': {
        en: 'Apply Results',
        vi: 'Áp dụng kết quả',
        ja: '結果を適用',
        ko: '결과 적용',
        zh: '应用结果'
    },
    'calibrate_imu': {
        en: 'Calibrate IMU',
        vi: 'Hiệu chuẩn IMU',
        ja: 'IMUキャリブレーション',
        ko: 'IMU 캘리브레이션',
        zh: '校准 IMU'
    },
    'imu_calibration': {
        en: 'IMU Calibration',
        vi: 'Hiệu chuẩn IMU',
        ja: 'IMUキャリブレーション',
        ko: 'IMU 캘리브레이션',
        zh: 'IMU 校准'
    },
    'imu_status_not_cal': {
        en: 'Not calibrated',
        vi: 'Chưa hiệu chuẩn',
        ja: '未キャリブレーション',
        ko: '보정 안됨',
        zh: '未校准'
    },
    'imu_status_calibrating': {
        en: 'Calibrating...',
        vi: 'Đang hiệu chuẩn...',
        ja: 'キャリブレーション中...',
        ko: '보정 중...',
        zh: '校准中...'
    },
    'imu_status_calibrated': {
        en: 'Calibrated!',
        vi: 'Đã hiệu chuẩn!',
        ja: 'キャリブレーション完了!',
        ko: '보정 완료!',
        zh: '校准完成!'
    },
    'show_offsets': {
        en: 'Show Offsets',
        vi: 'Hiển thị Offset',
        ja: 'オフセット表示',
        ko: '오프셋 표시',
        zh: '显示偏移量'
    },
    'motor_free_speed': {
        en: 'Motor Free Speed',
        vi: 'Tốc độ tự do motor',
        ja: 'モーター空載速度',
        ko: '모터 무부하 속도',
        zh: '电机空载转速'
    },
    'internal_gearbox': {
        en: 'Internal Gearbox',
        vi: 'Hộp số trong',
        ja: '内部ギアボックス',
        ko: '내부 기어박스',
        zh: '内部齿轮箱'
    },
    'output_rpm_noload': {
        en: 'Output RPM (no load)',
        vi: 'RPM đầu ra (không tải)',
        ja: '出力RPM (無負荷)',
        ko: '출력 RPM (무부하)',
        zh: '输出 RPM (无负载)'
    },
    'output_rpm_loaded': {
        en: 'Output RPM (loaded)',
        vi: 'RPM đầu ra (có tải)',
        ja: '出力RPM (負荷時)',
        ko: '출력 RPM (부하 시)',
        zh: '输出 RPM (有负载)'
    },
    'stall_torque': {
        en: 'Stall Torque',
        vi: 'Mô-men dừng',
        ja: 'ストールトルク',
        ko: '스톨 토크',
        zh: '堵转扭矩'
    },
    'export_results': {
        en: 'Export Results',
        vi: 'Xuất kết quả',
        ja: '結果をエクスポート',
        ko: '결과 내보내기',
        zh: '导出结果'
    },
    'copy_kotlin_config': {
        en: 'Copy Kotlin Config',
        vi: 'Sao chép cấu hình Kotlin',
        ja: 'Kotlin設定をコピー',
        ko: 'Kotlin 구성 복사',
        zh: '复制 Kotlin 配置'
    },
    'run_history': {
        en: 'Run History',
        vi: 'Lịch sử chạy',
        ja: '実行履歴',
        ko: '실행 기록',
        zh: '运行历史'
    },
    'best_run': {
        en: 'Best run',
        vi: 'Lần tốt nhất',
        ja: '最良の実行',
        ko: '최적 실행',
        zh: '最佳运行'
    },
    'std_deviation': {
        en: 'Std deviation',
        vi: 'Độ lệch chuẩn',
        ja: '標準偏差',
        ko: '표준 편차',
        zh: '标准差'
    },
    'ready_start': {
        en: 'Ready. Select motor & gear, then click Start.',
        vi: 'Sẵn sàng. Chọn motor & hộp số, nhấn Bắt đầu.',
        ja: '準備完了。モーターとギアを選択して開始をクリック。',
        ko: '준비 완료. 모터와 기어를 선택한 후 시작을 클릭하십시오.',
        zh: '准备就绪。选择电机和齿轮，然后点击开始。'
    },

    // === FLYWHEEL CALCULATOR ===
    'motor_gearing': {
        en: 'Motor & Gearing',
        vi: 'Motor & Truyền động',
        ja: 'モーター & ギアリング',
        ko: '모터 & 기어링',
        zh: '电机 & 传动'
    },
    'flywheel_dims': {
        en: 'Flywheel Dimensions',
        vi: 'Kích thước Flywheel',
        ja: 'フライホイール寸法',
        ko: '플라이휠 치수',
        zh: '飞轮尺寸'
    },
    'projectile': {
        en: 'Projectile',
        vi: 'Đạn',
        ja: 'プロジェクタイル',
        ko: '투사체',
        zh: '抛射体'
    },
    'voltage_limits': {
        en: 'Voltage & Limits',
        vi: 'Điện áp & Giới hạn',
        ja: '電圧 & 限界',
        ko: '전압 & 한계',
        zh: '电压 & 限制'
    },
    'wheel_diameter': {
        en: 'Wheel Diameter',
        vi: 'Đường kính bánh xe',
        ja: 'ホイール径',
        ko: '휠 직경',
        zh: '轮径'
    },
    'wheel_width': {
        en: 'Wheel Width',
        vi: 'Chiều rộng bánh xe',
        ja: 'ホイール幅',
        ko: '휠 너비',
        zh: '轮宽'
    },
    'wheel_material': {
        en: 'Wheel Material',
        vi: 'Vật liệu bánh xe',
        ja: 'ホイール材質',
        ko: '휠 재질',
        zh: '轮材质'
    },
    'num_wheels': {
        en: 'Number of Wheels',
        vi: 'Số bánh xe',
        ja: 'ホイール数',
        ko: '휠 수',
        zh: '轮数'
    },
    'ball_diameter': {
        en: 'Ball Diameter',
        vi: 'Đường kính bóng',
        ja: 'ボール径',
        ko: '공 직경',
        zh: '球径'
    },
    'ball_weight': {
        en: 'Ball Weight',
        vi: 'Trọng lượng bóng',
        ja: 'ボール重量',
        ko: '공 무게',
        zh: '球重'
    },
    'target_exit_velocity': {
        en: 'Target Exit Velocity',
        vi: 'Vận tốc đầu ra',
        ja: 'ターゲット出口速度',
        ko: '목표 출구 속도',
        zh: '目标出口速度'
    },
    'compression_ratio': {
        en: 'Compression Ratio',
        vi: 'Tỷ số nén',
        ja: 'コンプレッション比',
        ko: '압축비',
        zh: '压缩比'
    },
    'supply_voltage': {
        en: 'Supply Voltage',
        vi: 'Điện áp cung cấp',
        ja: '電源電圧',
        ko: '공급 전압',
        zh: '供电电压'
    },
    'target_shaft_rpm': {
        en: 'Target Shaft RPM',
        vi: 'RPM trục mục tiêu',
        ja: 'ターゲットシャフトRPM',
        ko: '목표 샤프트 RPM',
        zh: '目标轴 RPM'
    },
    'save_config': {
        en: 'Save Config',
        vi: 'Lưu cấu hình',
        ja: '設定を保存',
        ko: '구성 저장',
        zh: '保存配置'
    },
    'shaft_rpm': {
        en: 'Shaft RPM',
        vi: 'RPM trục',
        ja: 'シャフトRPM',
        ko: '샤프트 RPM',
        zh: '轴 RPM'
    },
    'surface_speed': {
        en: 'Surface Speed',
        vi: 'Tốc độ bề mặt',
        ja: '表面速度',
        ko: '표면 속도',
        zh: '表面速度'
    },
    'max_velocity': {
        en: 'Max Velocity',
        vi: 'Vận tốc tối đa',
        ja: '最大速度',
        ko: '최대 속도',
        zh: '最大速度'
    },
    'exit_velocity': {
        en: 'Exit Velocity',
        vi: 'Vận tốc đầu ra',
        ja: '出口速度',
        ko: '출구 속도',
        zh: '出口速度'
    },
    'spinup_time': {
        en: 'Spin-up Time (0-90%)',
        vi: 'Thời gian quay (0-90%)',
        ja: 'スピンアップ時間 (0-90%)',
        ko: '스핀업 시간 (0-90%)',
        zh: '加速时间 (0-90%)'
    },
    'energy_per_shot': {
        en: 'Energy per Shot',
        vi: 'Năng lượng mỗi phát',
        ja: 'ショットあたりエネルギー',
        ko: '발사당 에너지',
        zh: '每发射能量'
    },
    'motor_current': {
        en: 'Motor Current',
        vi: 'Dòng điện motor',
        ja: 'モーター電流',
        ko: '모터 전류',
        zh: '电机电流'
    },
    'total_power': {
        en: 'Total Power',
        vi: 'Công suất tổng',
        ja: '総電力',
        ko: '총 전력',
        zh: '总功率'
    },
    'spinup_chart': {
        en: 'Spin-up Chart',
        vi: 'Biểu đồ quay',
        ja: 'スピンアップチャート',
        ko: '스핀업 차트',
        zh: '加速图表'
    },
    'formulas_guide': {
        en: 'Formulas & Guide',
        vi: 'Công thức & Hướng dẫn',
        ja: 'フォーミュラ & ガイド',
        ko: '공식 & 가이드',
        zh: '公式 & 指南'
    },

    // === DATA LOGGER ===
    'live_telemetry': {
        en: 'Live Telemetry',
        vi: 'Telemetry trực tiếp',
        ja: 'ライブテレメトリ',
        ko: '실시간 텔레메트리',
        zh: '实时遥测'
    },
    'waiting_data': {
        en: 'Waiting for telemetry data...',
        vi: 'Đang chờ dữ liệu telemetry...',
        ja: 'テレメトリデータを待機中...',
        ko: '텔레메트리 데이터 대기 중...',
        zh: '等待遥测数据...'
    },
    'select_tag_chart': {
        en: '-- Select tag to chart --',
        vi: '-- Chọn tag để vẽ biểu đồ --',
        ja: '-- チャートするタグを選択 --',
        ko: '-- 차트에 표시할 태그 선택 --',
        zh: '-- 选择要绘制的标签 --'
    },
    'statistics': {
        en: 'Statistics',
        vi: 'Thống kê',
        ja: '統計',
        ko: '통계',
        zh: '统计'
    },
    'samples': {
        en: 'Samples',
        vi: 'Mẫu',
        ja: 'サンプル',
        ko: '샘플',
        zh: '样本'
    },
    'tags': {
        en: 'Tags',
        vi: 'Thẻ',
        ja: 'タグ',
        ko: '태그',
        zh: '标签'
    },
    'duration': {
        en: 'Duration',
        vi: 'Thời lượng',
        ja: '期間',
        ko: '지속 시간',
        zh: '持续时间'
    },
    'rate': {
        en: 'Rate',
        vi: 'Tỷ lệ',
        ja: 'レート',
        ko: '속도',
        zh: '速率'
    },
    'quick_export': {
        en: 'Quick Export',
        vi: 'Xuất nhanh',
        ja: 'クイックエクスポート',
        ko: '빠른 내보내기',
        zh: '快速导出'
    },
    'export_csv': {
        en: 'Export CSV',
        vi: 'Xuất CSV',
        ja: 'CSVエクスポート',
        ko: 'CSV 내보내기',
        zh: '导出 CSV'
    },
    'export_json': {
        en: 'Export JSON',
        vi: 'Xuất JSON',
        ja: 'JSONエクスポート',
        ko: 'JSON 내보내기',
        zh: '导出 JSON'
    },
    'export_kotlin': {
        en: 'Export Kotlin',
        vi: 'Xuất Kotlin',
        ja: 'Kotlinエクスポート',
        ko: 'Kotlin 내보내기',
        zh: '导出 Kotlin'
    },
    'last_values': {
        en: 'Last Values',
        vi: 'Giá trị cuối',
        ja: '最新値',
        ko: '최신 값',
        zh: '最后值'
    },
    'data_cleared': {
        en: 'Data cleared. Click Record to start.',
        vi: 'Đã xóa dữ liệu. Nhấn Ghi lại để bắt đầu.',
        ja: 'データをクリア。記録をクリックして開始。',
        ko: '데이터 지워짐. 녹화를 클릭하여 시작.',
        zh: '数据已清除。点击录制开始。'
    },

    // === FORMULAS ===
    'formula_shaft_rpm': {
        en: 'Shaft RPM = (Motor RPM / Gear Ratio) × Efficiency',
        vi: 'RPM trục = (RPM Motor / Tỷ số hộp số) × Hiệu suất',
        ja: 'シャフトRPM = (モーターRPM / ギア比) × 効率',
        ko: '샤프트 RPM = (모터 RPM / 기어비) × 효율',
        zh: '轴 RPM = (电机 RPM / 齿轮比) × 效率'
    },
    'formula_surface_speed': {
        en: 'Surface Speed = Shaft RPM × π × Diameter / 60',
        vi: 'Tốc độ bề mặt = RPM trục × π × Đường kính / 60',
        ja: '表面速度 = シャフトRPM × π × 直径 / 60',
        ko: '표면 속도 = 샤프트 RPM × π × 직경 / 60',
        zh: '表面速度 = 轴 RPM × π × 直径 / 60'
    },
    'formula_spinup': {
        en: 't = (ω_target × 0.9) / α  |  α = Torque / I',
        vi: 't = (ω_target × 0.9) / α  |  α = Mô-men / I',
        ja: 't = (ω_target × 0.9) / α  |  α = トルク / I',
        ko: 't = (ω_target × 0.9) / α  |  α = 토크 / I',
        zh: 't = (ω_target × 0.9) / α  |  α = 扭矩 / I'
    },
    'formula_exit_velocity': {
        en: 'v_exit = Surface Speed × (1 + Compression)',
        vi: 'v_đầu ra = Tốc độ bề mặt × (1 + Tỷ số nén)',
        ja: 'v_exit = 表面速度 × (1 + コンプレッション)',
        ko: 'v_exit = 표면 속도 × (1 + 압축비)',
        zh: 'v_exit = 表面速度 × (1 + 压缩比)'
    },
    'formula_inertia': {
        en: 'I = 0.5 × m × r²  |  m = density × π × r² × width',
        vi: 'I = 0.5 × m × r²  |  m = mật độ × π × r² × chiều rộng',
        ja: 'I = 0.5 × m × r²  |  m = 密度 × π × r² × 幅',
        ko: 'I = 0.5 × m × r²  |  m = 밀도 × π × r² × 폭',
        zh: 'I = 0.5 × m × r²  |  m = 密度 × π × r² × 宽度'
    },
    'formula_feedforward': {
        en: 'kV = 1 / (kV_motor × efficiency × gear_ratio)',
        vi: 'kV = 1 / (kV_motor × hiệu suất × tỷ số hộp số)',
        ja: 'kV = 1 / (kV_motor × 効率 × ギア比)',
        ko: 'kV = 1 / (kV_motor × 효율 × 기어비)',
        zh: 'kV = 1 / (kV_motor × 效率 × 齿轮比)'
    },
    'formula_pidf': {
        en: 'Output = P×error + I×∫error + D×derror/dt + FF',
        vi: 'Output = P×lỗi + I×∫lỗi + D×dlỗi/dt + FF',
        ja: 'Output = P×誤差 + I×∫誤差 + D×d誤差/dt + FF',
        ko: 'Output = P×오차 + I×∫오차 + D×d오차/dt + FF',
        zh: 'Output = P×误差 + I×∫误差 + D×d误差/dt + FF'
    },
    'formula_ziegler': {
        en: 'Kp = 0.6×Ku  |  Ki = 2×Kp/Tu  |  Kd = Kp×Tu/8',
        vi: 'Kp = 0.6×Ku  |  Ki = 2×Kp/Tu  |  Kd = Kp×Tu/8',
        ja: 'Kp = 0.6×Ku  |  Ki = 2×Kp/Tu  |  Kd = Kp×Tu/8',
        ko: 'Kp = 0.6×Ku  |  Ki = 2×Kp/Tu  |  Kd = Kp×Tu/8',
        zh: 'Kp = 0.6×Ku  |  Ki = 2×Kp/Tu  |  Kd = Kp×Tu/8'
    },

    // === MOTOR NAMES ===
    'motor_rev_hd_hex_20': { en: 'REV HD Hex 20:1 (REV-41-1600)', vi: 'REV HD Hex 20:1 (REV-41-1600)', ja: 'REV HD Hex 20:1 (REV-41-1600)', ko: 'REV HD Hex 20:1 (REV-41-1600)', zh: 'REV HD Hex 20:1 (REV-41-1600)' },
    'motor_rev_hd_hex_40': { en: 'REV HD Hex 40:1 (REV-41-1601)', vi: 'REV HD Hex 40:1 (REV-41-1601)', ja: 'REV HD Hex 40:1 (REV-41-1601)', ko: 'REV HD Hex 40:1 (REV-41-1601)', zh: 'REV HD Hex 40:1 (REV-41-1601)' },
    'motor_rev_hd_hex_60': { en: 'REV HD Hex 60:1 (REV-41-1602)', vi: 'REV HD Hex 60:1 (REV-41-1602)', ja: 'REV HD Hex 60:1 (REV-41-1602)', ko: 'REV HD Hex 60:1 (REV-41-1602)', zh: 'REV HD Hex 60:1 (REV-41-1602)' },

    // === MISC ===
    'results_averaged': {
        en: 'PIDF Results (Averaged)',
        vi: 'Kết quả PIDF (Trung bình)',
        ja: 'PIDF結果 (平均)',
        ko: 'PIDF 결과 (평균)',
        zh: 'PIDF 结果 (平均)'
    },
    'not_calibrated': {
        en: 'Not calibrated',
        vi: 'Chưa hiệu chuẩn',
        ja: '未キャリブレーション',
        ko: '보정 안됨',
        zh: '未校准'
    },
    'data_cleared_msg': {
        en: 'Data cleared.',
        vi: 'Đã xóa dữ liệu.',
        ja: 'データをクリアしました。',
        ko: '데이터 지워짐.',
        zh: '数据已清除。'
    },
    'waiting_telemetry': {
        en: 'Waiting for telemetry...',
        vi: 'Đang chờ telemetry...',
        ja: 'テレメトリ待機中...',
        ko: '텔레메트리 대기 중...',
        zh: '等待遥测...'
    },
    'record_stopped': {
        en: 'Stopped',
        vi: 'Đã dừng',
        ja: '停止',
        ko: '중지됨',
        zh: '已停止'
    },
    'config_copied': {
        en: 'Config copied!',
        vi: 'Đã sao chép cấu hình!',
        ja: '設定をコピーしました!',
        ko: '구성 복사됨!',
        zh: '配置已复制!'
    },
    'results_exported': {
        en: 'Results exported!',
        vi: 'Đã xuất kết quả!',
        ja: '結果をエクスポートしました!',
        ko: '결과 내보내기 완료!',
        zh: '结果已导出!'
    },
    'imu_copied': {
        en: 'IMU offset config copied!',
        vi: 'Đã sao chép cấu hình IMU offset!',
        ja: 'IMUオフセット設定をコピーしました!',
        ko: 'IMU 오프셋 구성 복사됨!',
        zh: 'IMU 偏移配置已复制!'
    },
    'imu_reset': {
        en: 'IMU reset.',
        vi: 'Đã đặt lại IMU.',
        ja: 'IMUをリセットしました。',
        ko: 'IMU 리셋됨.',
        zh: 'IMU 已重置。'
    }
};

// ============================================================
// Language Manager
// ============================================================
let currentLang = localStorage.getItem('ftc_dashboard_lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ftc_dashboard_lang', lang);
    applyTranslations();
}

function t(key) {
    if (TRANSLATIONS[key] && TRANSLATIONS[key][currentLang]) {
        return TRANSLATIONS[key][currentLang];
    }
    if (TRANSLATIONS[key] && TRANSLATIONS[key]['en']) {
        return TRANSLATIONS[key]['en'];
    }
    return key;
}

function applyTranslations() {
    // Apply to all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key);
        if (el.tagName === 'INPUT' && el.type !== 'button') {
            el.placeholder = translation;
        } else {
            el.textContent = translation;
        }
    });
    
    // Apply to all elements with data-i18n-title attribute
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = t(key);
    });
}

function createLanguageSelector() {
    const container = document.createElement('div');
    container.style.cssText = 'display:flex;align-items:center;gap:6px;background:#1e293b;padding:6px 12px;border-radius:8px;border:1px solid #334155;';
    
    const label = document.createElement('span');
    label.style.cssText = 'font-size:11px;color:#64748b;';
    label.textContent = '🌐';
    container.appendChild(label);
    
    const select = document.createElement('select');
    select.style.cssText = 'background:#0f172a;border:1px solid #475569;color:#e2e8f0;padding:4px 8px;border-radius:6px;font-size:12px;cursor:pointer;';
    
    Object.entries(LANGUAGES).forEach(([code, lang]) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = lang.flag + ' ' + lang.name;
        if (code === currentLang) option.selected = true;
        select.appendChild(option);
    });
    
    select.onchange = function() {
        setLanguage(this.value);
    };
    
    container.appendChild(select);
    return container;
}

// Auto-apply translations on page load
document.addEventListener('DOMContentLoaded', function() {
    applyTranslations();
});
