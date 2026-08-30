"""
FTC Data Analyzer
Phân tích dữ liệu CSV từ DataLogger

Cách dùng:
1. Tải file CSV từ Control Hub về máy tính
2. Chạy: python analyze_data.py <ten_file.csv>
"""

import pandas as pd
import matplotlib.pyplot as plt
import sys
import os

def analyze_csv(file_path):
    """Phân tích file CSV từ FTC robot"""
    
    # Đọc CSV
    df = pd.read_csv(file_path)
    
    print("=" * 60)
    print("FTC DATA ANALYSIS")
    print("=" * 60)
    print(f"\nFile: {file_path}")
    print(f"Total rows: {len(df)}")
    print(f"Duration: {df['Time'].max():.2f} seconds")
    
    # Thống kê cơ bản
    print("\n--- INPUT STATISTICS ---")
    print(f"Y Input:    min={df['Y_Input'].min():.3f}  max={df['Y_Input'].max():.3f}  avg={df['Y_Input'].mean():.3f}")
    print(f"X Input:    min={df['X_Input'].min():.3f}  max={df['X_Input'].max():.3f}  avg={df['X_Input'].mean():.3f}")
    print(f"Rotation:   min={df['Rotation_Input'].min():.3f}  max={df['Rotation_Input'].max():.3f}  avg={df['Rotation_Input'].mean():.3f}")
    
    print("\n--- MOTOR POWER ---")
    for motor in ['FL_Power', 'FR_Power', 'BL_Power', 'BR_Power']:
        print(f"{motor}: min={df[motor].min():.3f}  max={df[motor].max():.3f}  avg={df[motor].mean():.3f}")
    
    print("\n--- ENCODER POSITION ---")
    for enc in ['FL_Pos', 'FR_Pos', 'BL_Pos', 'BR_Pos']:
        print(f"{enc}: min={df[enc].min()}  max={df[enc].max()}  range={df[enc].max()-df[enc].min()}")
    
    # Vẽ graphs
    fig, axes = plt.subplots(3, 1, figsize=(12, 10))
    
    # Plot 1: Inputs
    axes[0].plot(df['Time'], df['Y_Input'], label='Y (Forward)')
    axes[0].plot(df['Time'], df['X_Input'], label='X (Strafe)')
    axes[0].plot(df['Time'], df['Rotation_Input'], label='Rotation')
    axes[0].set_title('Gamepad Inputs')
    axes[0].set_xlabel('Time (s)')
    axes[0].set_ylabel('Value')
    axes[0].legend()
    axes[0].grid(True)
    axes[0].set_ylim(-1.2, 1.2)
    
    # Plot 2: Motor Powers
    axes[1].plot(df['Time'], df['FL_Power'], label='Front Left')
    axes[1].plot(df['Time'], df['FR_Power'], label='Front Right')
    axes[1].plot(df['Time'], df['BL_Power'], label='Back Left')
    axes[1].plot(df['Time'], df['BR_Power'], label='Back Right')
    axes[1].set_title('Motor Powers')
    axes[1].set_xlabel('Time (s)')
    axes[1].set_ylabel('Power')
    axes[1].legend()
    axes[1].grid(True)
    
    # Plot 3: Encoder Positions
    axes[2].plot(df['Time'], df['FL_Pos'], label='Front Left')
    axes[2].plot(df['Time'], df['FR_Pos'], label='Front Right')
    axes[2].plot(df['Time'], df['BL_Pos'], label='Back Left')
    axes[2].plot(df['Time'], df['BR_Pos'], label='Back Right')
    axes[2].set_title('Encoder Positions')
    axes[2].set_xlabel('Time (s)')
    axes[2].set_ylabel('Ticks')
    axes[2].legend()
    axes[2].grid(True)
    
    plt.tight_layout()
    plt.savefig(file_path.replace('.csv', '_analysis.png'), dpi=150)
    plt.show()
    
    print(f"\nGraph saved: {file_path.replace('.csv', '_analysis.png')}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python analyze_data.py <file.csv>")
        print("Example: python analyze_data.py DriveLog_20260826_153022.csv")
        sys.exit(1)
    
    if os.path.exists(sys.argv[1]):
        analyze_csv(sys.argv[1])
    else:
        print(f"File not found: {sys.argv[1]}")
