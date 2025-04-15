#!/bin/bash

echo "🔧 Starting system optimization for SSD performance..."

# 1. Enable periodic TRIM
echo "✅ Enabling periodic TRIM for SSD..."
sudo systemctl enable fstrim.timer
sudo systemctl start fstrim.timer

# 2. Reduce swappiness to avoid slow swap usage
echo "✅ Setting swappiness to 10..."
if ! grep -q "vm.swappiness" /etc/sysctl.conf; then
    echo "vm.swappiness=10" | sudo tee -a /etc/sysctl.conf
else
    sudo sed -i 's/^vm.swappiness=.*/vm.swappiness=10/' /etc/sysctl.conf
fi
sudo sysctl -p

# 3. Optional: Disable Tracker services (indexing that slows GNOME)
echo "✅ Disabling GNOME Tracker indexing..."
systemctl --user mask tracker-miner-fs-3.service tracker-extract-3.service tracker-store-3.service 2>/dev/null

# 4. Optional: Remove Snap (comment these lines if you want to keep Snap)
echo "✅ (Optional) Removing Snap and its services..."
sudo systemctl stop snapd
sudo systemctl disable snapd
sudo apt purge snapd -y

# 5. Clean old packages
echo "✅ Cleaning up unused packages..."
sudo apt autoremove -y
sudo apt autoclean -y

echo "🚀 Optimization complete! You may reboot to apply all changes."
