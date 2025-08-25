import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="header">
      <div class="header-content">
        <div class="logo">
          <div class="logo-icon">RG</div>
          <h1>ReceiptGear Demo</h1>
        </div>
        <div class="status">
          <div class="status-dot"></div>
          <span>Demo Mode</span>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- Welcome Card -->
      <div class="card">
        <h2 style="font-size: 32px; margin-bottom: 8px;">Welcome to ReceiptGear</h2>
        <p style="color: #6b7280; margin-bottom: 24px;">Modern receipt management and printing solution</p>
        
        <div class="grid grid-3">
          <div class="feature-card blue">
            <span class="feature-icon">📄</span>
            <h3>Quick Print</h3>
            <p style="font-size: 12px; color: #6b7280;">Drag and drop files for instant printing</p>
          </div>
          
          <div class="feature-card green">
            <span class="feature-icon">📧</span>
            <h3>Email Monitor</h3>
            <p style="font-size: 12px; color: #6b7280;">Automated receipt processing</p>
          </div>
          
          <div class="feature-card yellow">
            <span class="feature-icon">🎨</span>
            <h3>Templates</h3>
            <p style="font-size: 12px; color: #6b7280;">Customizable receipt layouts</p>
          </div>
        </div>
      </div>

      <!-- Demo Features -->
      <div class="card">
        <h3 style="margin-bottom: 16px;">Demo Features</h3>
        <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 24px;">
          <div>
            <div style="margin-bottom: 8px;">✨ Modern UI Design</div>
            <div style="margin-bottom: 8px;">🖨️ Printer Management</div>
            <div style="margin-bottom: 8px;">📊 Real-time Statistics</div>
            <div style="margin-bottom: 8px;">🔧 AI Debugging Tools</div>
          </div>
          <div>
            <div style="margin-bottom: 8px;">📱 Responsive Layout</div>
            <div style="margin-bottom: 8px;">🎯 Template Builder</div>
            <div style="margin-bottom: 8px;">🔔 Smart Notifications</div>
            <div style="margin-bottom: 8px;">⚡ Performance Optimized</div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="card">
        <h3 style="margin-bottom: 16px;">Quick Actions</h3>
        <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
          <button class="btn btn-primary" (click)="testPrint()">🖨️ Test Print</button>
          <button class="btn btn-success" (click)="checkEmail()">📧 Check Email</button>
          <button class="btn btn-warning" (click)="openTemplates()">🎨 Open Templates</button>
        </div>
      </div>

      <!-- System Status -->
      <div class="card">
        <h3 style="margin-bottom: 16px;">System Status</h3>
        <div class="grid grid-4">
          <div class="stat">
            <div class="stat-value primary">42</div>
            <div class="stat-label">Receipts Today</div>
          </div>
          <div class="stat">
            <div class="stat-value success">3</div>
            <div class="stat-label">Active Printers</div>
          </div>
          <div class="stat">
            <div class="stat-value warning">12</div>
            <div class="stat-label">Templates</div>
          </div>
          <div class="stat">
            <div class="stat-value success">98.5%</div>
            <div class="stat-label">Success Rate</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
      © 2025 ReceiptGear Demo - Modern Angular Application
    </div>
  `
})
export class AppComponent {
  testPrint() {
    alert('Test print functionality would be executed here.\n\nThis demo showcases the modern UI design and structure of ReceiptGear.');
  }

  checkEmail() {
    alert('Email monitoring system would check for new receipts here.\n\nThe full version includes OAuth integration and automated processing.');
  }

  openTemplates() {
    alert('Template builder interface would open here.\n\nCreate and customize receipt layouts with drag-and-drop functionality.');
  }
}